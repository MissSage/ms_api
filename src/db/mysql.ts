import {
  Session,
  getSession,
  CollectionDocuments,
  DocumentOrJSON,
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
  async _connect() {
    this.session = await getSession(this.collectionProperties);
  }
  async _getCollection() {
    if (!this.session) await this._connect();
    return this.session.getSchema(this.schema).getCollection(this.collection);
  }
  async find(params?: {
    query?: {
      [key: string]: any
    };
    pagination?: {
      page: number;
      size: number;
    };
    sort?: {
      type: 'asc' | 'desc';
      field: string;
    };
  }) {
    const collection = await this._getCollection();
    let findStr = '';
    Object.keys(params.query || {}).map((key) => {
      findStr += key + ' = :' + key;
    });
    return await (
      await collection.find(findStr).bind(params.query).execute()
    ).fetchAll();
  }
  // 新增
  async add(params: CollectionDocuments) {
    const collection = await this._getCollection();
    return collection.add(params).execute();
  }
  async updateDoc(id: string, params: DocumentOrJSON) {
    const collection = await this._getCollection();
    return collection
      .modify('_id=' + id)
      .patch(params)
      .execute();
  }
  async deleteDoc(id: string) {
    const collection = await this._getCollection();
    return collection.remove('_id=:id').bind('_id', id).execute();
  }
}
