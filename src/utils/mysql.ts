import {
  Session,
  getSession,
  DocumentOrJSON
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
      connectTimeout: 180000
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
    this.session = await getSession(this.collectionProperties);
    console.log('数据库已连接');
  }
  /**
   * 连接表
   * @returns
   */
  async _getCollection() {
    await this._connect();
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
  async get(req: Request, findStr?: string) {
    const collection = await this._getCollection();
    findStr = findStr || ''
    const query: any = req.query;

    const filterkeys = Object.keys(req.query || {}).filter(
      (item) =>
        ['sortType', 'sortField', 'page', 'size'].indexOf(item) === -1,
    );
    filterkeys.map((key) => {
      if (
        req.query[key] !== null &&
        req.query[key] !== undefined &&
        req.query[key] !== ''
      ) {
        if (findStr !== '') {
          findStr += ' AND ';
        }
        if (['startTime', 'endTime'].indexOf(key) !== -1) {
          findStr += 'createTime' + (key === 'startTime' ? ' > :' : ' < :') + key;
        } else {
          findStr += key + ' like :' + key;
        }
      }
    });
    let find = collection.find(findStr || undefined)

    filterkeys.map((key) => {
      if (
        req.query[key] !== null &&
        req.query[key] !== undefined &&
        req.query[key] !== ''
      ) {
        if (['startTime', 'endTime'].indexOf(key) !== -1) {
          find.bind(key, Number(req.query[key]))
        } else {
          find.bind(key, '%' + req.query[key] + '%')
        }
      }
    });
    if (query.sortField !== undefined) {
      const sortStr: any = `${query.sortField} ${query.sortType || 'desc'}`;
      find = find.sort(sortStr);
    }
    const count = (await find.execute()).fetchAll().length;
    const size = Number(query.size || '20');
    const page = Number(query.page || '1');
    find = find
      .limit(size)
      .offset((page - 1) * size)

    const exed = await find.execute()
    const data = await exed.fetchAll()
    return {
      data: data || [],
      total: count || 0,
    };
  }
  async detail(_id: string) {
    const collection = await this._getCollection();
    const res = await (
      await collection.find('_id = :_id').bind('_id', _id).execute()
    ).fetchOne();
    return res
  }
  // 新增
  async post(params: DocumentOrJSON) {
    params['createTime'] = new Date().valueOf();
    const collection = await this._getCollection();
    const res = await collection.add(params).execute();
    return res
  }
  async put(id: string, params: DocumentOrJSON) {
    const collection = await this._getCollection();
    const res = await collection
      .modify('_id = :id')
      .patch({ ...(params as object), 'updateTime': new Date().valueOf() })
      .bind('id', id)
      .execute();
    return res
  }
  async patch(req: Request) {
    const collection = await this._getCollection();
    const ids = req.body.ids
    const params = req.body.params
    if (!ids || !params) return
    const modi = collection.modify('_id = :id').patch(req.body.params)
    const proS: any[] = []
    ids.map(item => {
      proS.push(modi.bind('id', item).execute())
    })
    const res = await Promise.all(proS)
    return res
  }
  async del(ids: string[]) {
    const collection = await this._getCollection();
    const remove = collection.remove('_id=:id')
    const proS = []
    ids?.map(item => {
      proS.push(remove.bind('id', item).execute())
    })
    const res = await Promise.all(proS)
    return res
  }
}
