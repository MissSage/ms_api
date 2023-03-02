import {
  Session,
  getSession,
  DocumentOrJSON,
  CollectionFind,
} from '@mysql/xdevapi';
import { Options } from '@mysql/xdevapi/types/lib/DevAPI/Connection';
import { Request } from 'express';
export class Base {
  constructor(properties: {
    schema: string;
    collection: string;
    collectionProperties?: string | Options;
  }) {
    this.schema = properties.schema;
    this.collection = properties.collection;
    this.collectionProperties = properties.collectionProperties || {
      user: 'root',
      password: '960124',
      host: 'localhost',
      port: 33060,
    };
  }
  schema: string;
  collection: string;
  session: Session;
  collectionProperties: string | Options;
  /**
   * 连接数据库
   */
  async _connect() {
    try {
      this.session = await getSession(this.collectionProperties);
    } catch (error) {
      console.log(error.message);
    }
  }
  /**
   * 连接表
   * @returns
   */
  async _getCollection() {
    if (!this.session) await this._connect();
    return this.session
      .getSchema(this.schema)
      .createCollection(this.collection, { reuseExisting: true });
  }
  /**
   * 查询
   * @param req 查询条件
   * @param find 自定义的查询，不配置则进行精确查找
   * @returns
   */
  async get(req: Request, find?: CollectionFind) {
    if (!find) {
      const collection = await this._getCollection();
      let findStr = '';
      const filterkeys = Object.keys(req.query || {})
        .filter(
          (item) =>
            ['sortType', 'sortField', 'page', 'size'].indexOf(item) === -1,
        )
      filterkeys.map((key, i) => {

        if (req.query[key] !== null && req.query[key] !== undefined && req.query[key] !== '') {
          if (findStr !== '') {
            findStr += ' AND '
          }
          findStr += key + ' like :' + key;
        }

      });
      find = collection.find(findStr || undefined)
      filterkeys.map(key => {
        if (req.query[key] !== null && req.query[key] !== undefined && req.query[key] !== '')
          find.bind(key, '%' + req.query[key] + '%')
      })
    }

    const count = (await find.execute()).fetchAll().length
    const query: any = req.query
    const size = query.size
    const page = query.page
    if (size !== undefined) {
      find = find
        .offset((Number(page) || 1) * (Number(size) || 50))
        .limit(Number(size));
    }
    if (query.sortField !== undefined) {
      const sortStr: any = `${query.sortField} ${query.sortType || 'desc'}`;
      find = find.sort(sortStr);
    }
    return {
      data: await (await find.execute()).fetchAll(),
      total: count
    }
  }
  async detail(_id: string) {
    const collection = await this._getCollection();
    return await (
      await collection.find('_id = :_id').bind('_id', _id).execute()
    ).fetchOne();
  }
  // 新增
  async post(params: DocumentOrJSON) {
    params['createTime'] = new Date().valueOf()
    const collection = await this._getCollection();
    return collection.add(params).execute();
  }
  async put(id: string, params: DocumentOrJSON) {
    const collection = await this._getCollection();
    console.log(id, params);

    return collection
      .modify('_id = :id')
      .patch(params)
      .bind('id', id)
      .execute();
  }
  async del(id: string) {
    const collection = await this._getCollection();
    return collection.remove('_id=:id').bind('id', id).execute();
  }
}
