import { Session, DocumentOrJSON, getSession, Collection, CollectionAdd } from '@mysql/xdevapi';
import { Options } from '@mysql/xdevapi/types/lib/DevAPI/Connection';
import { Request } from 'express';
export class Base {
  constructor(properties: {
    schema: string;
    collection: string;
    collectionProperties?: string | Options;
  }) {
    this.schema = properties.schema;
    this.collectionName = properties.collection;
    this.collectionProperties = properties.collectionProperties || {
      user: 'root',
      password: '960124',
      host: 'localhost',
      port: 33060,
      connectTimeout: 0,
    };
  }
  schema: string;
  collectionName: string;
  session: Session;
  collectionProperties: string | Options;
  /**
   * 连接表
   * @returns
   */
  async _getCollection(): Promise<Collection | undefined> {
    try {

      this.session = await getSession(this.collectionProperties);
      return this.session
        .getSchema(this.schema)
        .createCollection(this.collectionName, { reuseExisting: true });
    } catch (error) {
      throw new Error(error)
    }

  }
  async _dispose(): Promise<void> {
    try {
      await this.session.close()
    } catch (error) {
      throw new Error(error)
    }
  }
  /**
   * 查询
   * @param req 查询条件
   * @param find 自定义的查询，不配置则进行精确查找
   * @returns
   */
  async get(query: Record<string, any> = {}, findStr?: string) {
    const collection = await this._getCollection();
    findStr = findStr || '';
    const filterkeys = Object.keys(query || {}).filter(
      (item) => ['sortType', 'sortField', 'page', 'size'].indexOf(item) === -1,
    );
    filterkeys.map((key) => {
      if (
        query[key] !== null &&
        query[key] !== undefined &&
        query[key] !== ''
      ) {
        if (findStr !== '') {
          findStr += ' AND ';
        }
        if (['startTime', 'endTime'].indexOf(key) !== -1) {
          findStr +=
            'createTime' + (key === 'startTime' ? ' > :' : ' < :') + key;
        } else {
          findStr += key + ' like :' + key;
        }
      }
    });
    let find = collection.find(findStr || undefined);

    filterkeys.map((key) => {
      if (
        query[key] !== null &&
        query[key] !== undefined &&
        query[key] !== ''
      ) {
        if (['startTime', 'endTime'].indexOf(key) !== -1) {
          find.bind(key, Number(query[key]));
        } else {
          find.bind(key, '%' + query[key] + '%');
        }
      }
    });
    if (query.sortField !== undefined) {
      const sortStr: any = `${query.sortField} ${query.sortType || 'desc'}`;
      find = find.sort(sortStr);
    }
    const count = (await find.execute()).fetchAll().length;
    if (query.page && query.size) {
      const size = Number(query.size);
      const page = Number(query.page);
      find = find.limit(size).offset((page - 1) * size);
    }

    const exed = await find.execute();
    const data = await exed.fetchAll();
    await this._dispose()
    return {
      data: data || [],
      total: count || 0,
    };
  }
  /**
   * 详情
   * @param _id 
   * @returns 
   */
  async detail(_id: string) {
    const collection = await this._getCollection();
    const find = await collection.find('_id = :_id').bind('_id', _id).execute()
    const res = await find.fetchOne();
    await this._dispose()
    return res;
  }
  async findByIds(ids: any[]) {
    const collection = await this._getCollection();
    const find = collection.find('_id = :id')
    const proS: any[] = [];
    ids.map((item) => {
      proS.push(find.bind('id', item).execute());
    });
    let res = await Promise.all(proS);
    res = res.map(item=>item.fetchOne())
    await this._dispose()
    return res;
  }
  /**
   * 新增
   * @param params 
   * @returns 
   */
  async post(params: DocumentOrJSON) {
    params['createTime'] = new Date().valueOf();
    const collection = await this._getCollection();
    const res = await collection.add(params).execute();
    await this._dispose()
    return res;
  }
  async put(id: string, params: DocumentOrJSON) {
    const collection = await this._getCollection();
    const res = await collection
      .modify('_id = :id')
      .patch({ ...(params as object), updateTime: new Date().valueOf() })
      .bind('id', id)
      .execute();
    await this._dispose()
    return res;
  }
  async patch(req: Request) {
    const collection = await this._getCollection();
    const ids = req.body.ids;
    const params = req.body.params;
    if (!ids || !params) return;
    const modi = collection.modify('_id = :id').patch(req.body.params);
    const proS: any[] = [];
    ids.map((item) => {
      proS.push(modi.bind('id', item).execute());
    });
    const res = await Promise.all(proS);
    await this._dispose()
    return res;
  }
  /**
   * 一次添加多个
   * @param rows 
   * @returns 
   */
  async addMany(rows: any[]) {
    const collection = await this._getCollection();
    let add: CollectionAdd = undefined;
    rows.map(row => {
      if (add) {
        add = add.add(row);
      } else {
        add = collection.add(row);
      }
    })
    const result = await add?.execute()
    await this._dispose()
    return result
  }
  async del(ids: string[]) {
    const collection = await this._getCollection();
    const remove = collection.remove('_id=:id');
    const proS = [];
    ids?.map((item) => {
      proS.push(remove.bind('id', item).execute());
    });
    const res = await Promise.all(proS);
    await this._dispose()
    return res;
  }
}
