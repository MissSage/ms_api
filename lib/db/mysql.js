"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = void 0;
const xdevapi_1 = require("@mysql/xdevapi");
class Base {
    constructor(properties) {
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
    schema;
    collectionName;
    session;
    collectionProperties;
    /**
     * 连接表
     * @returns
     */
    async _getCollection() {
        try {
            this.session = await (0, xdevapi_1.getSession)(this.collectionProperties);
            return this.session
                .getSchema(this.schema)
                .createCollection(this.collectionName, { reuseExisting: true });
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async _dispose() {
        try {
            await this.session.close();
        }
        catch (error) {
            throw new Error(error);
        }
    }
    /**
     * 查询
     * @param req 查询条件
     * @param find 自定义的查询，不配置则进行精确查找
     * @returns
     */
    async get(query = {}, findStr) {
        const collection = await this._getCollection();
        findStr = findStr || '';
        const filterkeys = Object.keys(query || {}).filter((item) => ['sortType', 'sortField', 'page', 'size'].indexOf(item) === -1);
        filterkeys.map((key) => {
            if (query[key] !== null &&
                query[key] !== undefined &&
                query[key] !== '') {
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
            if (query[key] !== null &&
                query[key] !== undefined &&
                query[key] !== '') {
                if (['startTime', 'endTime'].indexOf(key) !== -1) {
                    find.bind(key, Number(query[key]));
                }
                else {
                    find.bind(key, '%' + query[key] + '%');
                }
            }
        });
        if (query.sortField !== undefined) {
            const sortStr = `${query.sortField} ${query.sortType || 'desc'}`;
            find = find.sort(sortStr);
        }
        const count = (await find.execute()).fetchAll().length;
        if (query.size) {
            const size = Number(query.size || 20);
            const page = Number(query.page || 1);
            find = find.limit(size).offset((page - 1) * size);
        }
        const exed = await find.execute();
        const data = await exed.fetchAll();
        await this._dispose();
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
    async detail(_id) {
        const collection = await this._getCollection();
        const find = await collection.find('_id = :_id').bind('_id', _id).execute();
        const res = await find.fetchOne();
        await this._dispose();
        return res;
    }
    async findByIds(ids) {
        const collection = await this._getCollection();
        const find = collection.find('_id = :id');
        const proS = [];
        ids.map((item) => {
            proS.push(find.bind('id', item).execute());
        });
        let res = await Promise.all(proS);
        res = res.map((item) => item.fetchOne());
        await this._dispose();
        return res;
    }
    /**
     * 新增
     * @param params
     * @returns
     */
    async post(params) {
        params['createTime'] = new Date().valueOf();
        const collection = await this._getCollection();
        const res = await collection.add(params).execute();
        await this._dispose();
        return res;
    }
    async put(id, params) {
        const collection = await this._getCollection();
        const res = await collection
            .modify('_id = :id')
            .patch({ ...params, updateTime: new Date().valueOf() })
            .bind('id', id)
            .execute();
        await this._dispose();
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
        await this._dispose();
        return res;
    }
    /**
     * 一次添加多个
     * @param rows
     * @returns
     */
    async addMany(rows) {
        const collection = await this._getCollection();
        let add = undefined;
        rows.map((row) => {
            row['createTime'] = new Date().valueOf();
            if (add) {
                add = add.add(row);
            }
            else {
                add = collection.add(row);
            }
        });
        const result = await add?.execute();
        await this._dispose();
        return result;
    }
    async del(ids) {
        const collection = await this._getCollection();
        const remove = collection.remove('_id=:id');
        const proS = [];
        ids?.map((item) => {
            proS.push(remove.bind('id', item).execute());
        });
        const res = await Promise.all(proS);
        await this._dispose();
        return res;
    }
}
exports.Base = Base;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlzcWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGIvbXlzcWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNENBTXdCO0FBR3hCLE1BQWEsSUFBSTtJQUNmLFlBQVksVUFJWDtRQUNDLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUNoQyxJQUFJLENBQUMsY0FBYyxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUM7UUFDNUMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLFVBQVUsQ0FBQyxvQkFBb0IsSUFBSTtZQUM3RCxJQUFJLEVBQUUsTUFBTTtZQUNaLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLElBQUksRUFBRSxXQUFXO1lBQ2pCLElBQUksRUFBRSxLQUFLO1lBQ1gsY0FBYyxFQUFFLENBQUM7U0FDbEIsQ0FBQztJQUNKLENBQUM7SUFDRCxNQUFNLENBQVM7SUFDZixjQUFjLENBQVM7SUFDdkIsT0FBTyxDQUFVO0lBQ2pCLG9CQUFvQixDQUFtQjtJQUN2Qzs7O09BR0c7SUFDSCxLQUFLLENBQUMsY0FBYztRQUNsQixJQUFJO1lBQ0YsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLElBQUEsb0JBQVUsRUFBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUMzRCxPQUFPLElBQUksQ0FBQyxPQUFPO2lCQUNoQixTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztpQkFDdEIsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQ25FO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxNQUFNLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQztJQUNELEtBQUssQ0FBQyxRQUFRO1FBQ1osSUFBSTtZQUNGLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUM1QjtR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