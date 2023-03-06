"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = void 0;
const xdevapi_1 = require("@mysql/xdevapi");
class Base {
    constructor(properties) {
        this.schema = properties.schema;
        this.collection = properties.collection;
        this.collectionProperties = properties.collectionProperties || {
            user: 'root',
            password: '960124',
            host: 'localhost',
            port: 33060,
            connectTimeout: 180000,
        };
    }
    schema;
    collection;
    session;
    collectionProperties;
    /**
     * 连接数据库
     */
    async _connect() {
        this.session = await (0, xdevapi_1.getSession)(this.collectionProperties);
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
    async get(req, findStr) {
        const collection = await this._getCollection();
        findStr = findStr || '';
        const query = req.query;
        const filterkeys = Object.keys(req.query || {}).filter((item) => ['sortType', 'sortField', 'page', 'size'].indexOf(item) === -1);
        filterkeys.map((key) => {
            if (req.query[key] !== null &&
                req.query[key] !== undefined &&
                req.query[key] !== '') {
                if (findStr !== '') {
                    findStr += ' AND ';
                }
                if (['startTime', 'endTime'].indexOf(key) !== -1) {
                    findStr +=
                        'createTime' + (key === 'startTime' ? ' > :' : ' < :') + key;
                }
                else {
                    findStr += key + ' like :' + key;
                }
            }
        });
        let find = collection.find(findStr || undefined);
        filterkeys.map((key) => {
            if (req.query[key] !== null &&
                req.query[key] !== undefined &&
                req.query[key] !== '') {
                if (['startTime', 'endTime'].indexOf(key) !== -1) {
                    find.bind(key, Number(req.query[key]));
                }
                else {
                    find.bind(key, '%' + req.query[key] + '%');
                }
            }
        });
        if (query.sortField !== undefined) {
            const sortStr = `${query.sortField} ${query.sortType || 'desc'}`;
            find = find.sort(sortStr);
        }
        const count = (await find.execute()).fetchAll().length;
        const size = Number(query.size || '20');
        const page = Number(query.page || '1');
        find = find.limit(size).offset((page - 1) * size);
        const exed = await find.execute();
        const data = await exed.fetchAll();
        return {
            data: data || [],
            total: count || 0,
        };
    }
    async detail(_id) {
        const collection = await this._getCollection();
        const res = await (await collection.find('_id = :_id').bind('_id', _id).execute()).fetchOne();
        return res;
    }
    // 新增
    async post(params) {
        params['createTime'] = new Date().valueOf();
        const collection = await this._getCollection();
        const res = await collection.add(params).execute();
        return res;
    }
    async put(id, params) {
        const collection = await this._getCollection();
        const res = await collection
            .modify('_id = :id')
            .patch({ ...params, updateTime: new Date().valueOf() })
            .bind('id', id)
            .execute();
        return res;
    }
    async patch(req) {
        const collection = await this._getCollection();
        const ids = req.body.ids;
        const params = req.body.params;
        if (!ids || !params)
            return;
        const modi = collection.modify('_id = :id').patch(req.body.params);
        const proS = [];
        ids.map((item) => {
            proS.push(modi.bind('id', item).execute());
        });
        const res = await Promise.all(proS);
        return res;
    }
    async del(ids) {
        const collection = await this._getCollection();
        const remove = collection.remove('_id=:id');
        const proS = [];
        ids?.map((item) => {
            proS.push(remove.bind('id', item).execute());
        });
        const res = await Promise.all(proS);
        return res;
    }
}
exports.Base = Base;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlzcWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbHMvbXlzcWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNENBQXFFO0FBR3JFLE1BQWEsSUFBSTtJQUNmLFlBQVksVUFJWDtRQUNDLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUM7UUFDeEMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLFVBQVUsQ0FBQyxvQkFBb0IsSUFBSTtZQUM3RCxJQUFJLEVBQUUsTUFBTTtZQUNaLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLElBQUksRUFBRSxXQUFXO1lBQ2pCLElBQUksRUFBRSxLQUFLO1lBQ1gsY0FBYyxFQUFFLE1BQU07U0FDdkIsQ0FBQztJQUNKLENBQUM7SUFDRCxNQUFNLENBQVM7SUFDZixVQUFVLENBQVM7SUFDbkIsT0FBTyxDQUFVO0lBQ2pCLG9CQUFvQixDQUFtQjtJQUN2Qzs7T0FFRztJQUNILEtBQUssQ0FBQyxRQUFRO1FBQ1osSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLElBQUEsb0JBQVUsRUFBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUMzRCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFDRDs7O09BR0c7SUFDSCxLQUFLLENBQUMsY0FBYztRQUNsQixNQUFNLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN0QixPQUFPLElBQUksQ0FBQyxPQUFPO2FBQ2hCLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ3RCLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBQ0Q7Ozs7O09BS0c7SUFDSCxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQVks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