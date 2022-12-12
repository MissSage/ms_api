import {
  Session,
  getSession,
  CollectionDocuments,
  DocumentOrJSON,
  Scalar,
} from '@mysql/xdevapi';
export class Base {
  constructor(properties: {
    schema: string;
    collection: string;
    collectionProperties?: string | Record<string, any>;
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
  collectionProperties: any;
  /**
   * 连接数据库
   */
  async _connect() {
    this.session = await getSession(this.collectionProperties);
  }
  /**
   * 连接表
   * @returns
   */
  async _getCollection() {
    if (!this.session) await this._connect();
    return this.session.getSchema(this.schema).getCollection(this.collection);
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
      type?: 'asc' | 'desc';
      field: string;
    };
  }) {
    const collection = await this._getCollection();
    let findStr = '';
    Object.keys(params?.query || {}).map((key) => {
      findStr += key + ' = :' + key;
    });
    let find = collection.find(findStr || undefined).bind(params?.query);

    if (params.pagination?.size) {
      find = find
        .offset((params.pagination.page || 1) * params.pagination.size)
        .limit(params.pagination.size);
    }
    if (params.sort) {
      find = find.sort(`${params.sort.field} ${params.sort.type || 'desc'}`);
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
  async post(params: CollectionDocuments) {
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
