import {
  Session,
  getSession,
  DocumentOrJSON,
  Scalar,
} from '@mysql/xdevapi';
import { Options } from '@mysql/xdevapi/types/lib/DevAPI/Connection';
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
   * @param params
   * @returns
   */
  async get(params?: {
    query?: {
      [key: string]: Scalar;
    };
    pagination?: {
      page: number;
      size: number;
    };
    sort?: {
      type?: string; // 'asc' | 'desc';
      field: string;
    };
  }) {
    const collection = await this._getCollection();
    let findStr = '';
    Object.keys(params?.query || {})
      .filter(
        (item) =>
          ['sortType', 'sortField', 'page', 'size'].indexOf(item) === -1,
      )
      .map((key) => {
        findStr += key + ' = :' + key;
      });
    let find = collection.find(findStr || undefined).bind(params?.query);

    if (params.pagination?.size) {
      find = find
        .offset((params.pagination.page || 1) * params.pagination.size)
        .limit(params.pagination.size);
    }
    if (params.sort) {
      const sortStr: any = `${params.sort.field} ${params.sort.type || 'desc'}`;
      find = find.sort(sortStr);
    }
    return await (await find.execute()).fetchAll();
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

    return await collection
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
