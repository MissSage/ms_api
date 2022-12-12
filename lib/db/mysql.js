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
        };
    }
    schema;
    collection;
    session;
    collectionProperties;
    async _connect() {
        this.session = await (0, xdevapi_1.getSession)(this.collectionProperties);
    }
    async _getCollection() {
        if (!this.session)
            await this._connect();
        return this.session.getSchema(this.schema).getCollection(this.collection);
    }
    async find(params) {
        const collection = await this._getCollection();
        let findStr = '';
        Object.keys(params?.query || {}).map((key) => {
            findStr += key + ' = :' + key;
        });
        return await (await collection
            .find(findStr || undefined)
            .bind(params?.query)
            .execute()).fetchAll();
    }
    // 新增
    async add(params) {
        const collection = await this._getCollection();
        return collection.add(params).execute();
    }
    async updateDoc(id, params) {
        const collection = await this._getCollection();
        return collection
            .modify('_id=' + id)
            .patch(params)
            .execute();
    }
    async deleteDoc(id) {
        const collection = await this._getCollection();
        return collection.remove('_id=:id').bind('_id', id).execute();
    }
}
exports.Base = Base;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlzcWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGIvbXlzcWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNENBTXdCO0FBQ3hCLE1BQWEsSUFBSTtJQUNmLFlBQVksVUFJWDtRQUNDLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUM7UUFDeEMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLFVBQVUsQ0FBQyxvQkFBb0IsSUFBSTtZQUM3RCxJQUFJLEVBQUUsTUFBTTtZQUNaLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLElBQUksRUFBRSxXQUFXO1lBQ2pCLElBQUksRUFBRSxLQUFLO1NBQ1osQ0FBQztJQUNKLENBQUM7SUFDRCxNQUFNLENBQVM7SUFDZixVQUFVLENBQVM7SUFDbkIsT0FBTyxDQUFVO0lBQ2pCLG9CQUFvQixDQUFNO0lBQzFCLEtBQUssQ0FBQyxRQUFRO1FBQ1osSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLElBQUEsb0JBQVUsRUFBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBQ0QsS0FBSyxDQUFDLGNBQWM7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPO1lBQUUsTUFBTSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxNQVlWO1FBQ0MsTUFBTSxVQUFVLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDL0MsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUMzQyxPQUFPLElBQUksR0FBRyxHQUFHLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLE1BQU0sQ0FDWCxNQUFNLFVBQVU7YUFDYixJQUFJLENBQUMsT0FBTyxJQUFJLFNBQVMsQ0FBQzthQUMxQixJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQzthQUNuQixPQUFPLEVBQUUsQ0FDYixDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUNELEtBQUs7SUFDTCxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQTJCO1FBQ25DLE1BQU0sVUFBVSxHQUFHLE1BQU0sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQy9DLE9BQU8sVUFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBQ0QsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFVLEVBQUUsTUFBc0I7UUFDaEQsTUFBTSxVQUFVLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDL0MsT0FBTyxVQUFVO2FBQ2QsTUFBTSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7YUFDbkIsS0FBSyxDQUFDLE1BQU0sQ0FBQzthQUNiLE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUNELEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBVTtRQUN4QixNQUFNLFVBQVUsR0FBRyxNQUFNLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMvQyxPQUFPLFVBQVUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNoRSxDQUFDO0NBQ0Y7QUFuRUQsb0JBbUVDIn0=