"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = exports.initTables = exports.getTable = exports.getCollection = exports.connect = void 0;
const mysqlx = require("@mysql/xdevapi");
const schemaConfig = require("../config/schema");
const connect = () => {
    return mysqlx.getSession({
        user: 'root',
        password: '960124',
        host: 'localhost',
        port: 33060,
    });
};
exports.connect = connect;
/**
 * 连接到ms数据库下的指定表名
 * @param tableName 表名
 * @returns
 */
const getCollection = async (session, schemaName, collectionName) => {
    try {
        const db = session.getSchema(schemaName);
        const collection = db.getCollection(collectionName);
        return collection;
    }
    catch (error) {
        console.log('连接到表' + collectionName + '时出错：');
        console.dir(error);
    }
};
exports.getCollection = getCollection;
const getTable = async (session, schemaName, tableName) => {
    try {
        const db = session.getSchema(schemaName);
        const collection = db.getTable(tableName);
        console.log('已连接到表user');
        return collection;
    }
    catch (error) {
        console.log('连接到表' + tableName + '时出错：');
        console.dir(error);
    }
};
exports.getTable = getTable;
/**
 * 检查数据库表，如果没有则生成
 */
const initTables = async (session, schemaName) => {
    const config = schemaConfig[schemaName];
    if (!config) {
        return;
    }
    let schema = session.getSchema(schemaName);
    const existsInDatabase = await schema.existsInDatabase();
    if (!existsInDatabase) {
        console.log('正在创建数据库：' + schemaName);
        schema = await session.createSchema(schemaName);
    }
    generateTables(schema, config, 0);
};
exports.initTables = initTables;
const generateTables = async (schema, configs, index) => {
    if (index >= configs.length)
        return;
    const config = configs[index];
    await schema.dropCollection(config.collection);
    let collection = schema.getCollection(config.collection);
    console.log('正在创建表：' + config.collection);
    collection = await schema.createCollection(config.collection, {
        reuseExisting: true,
    });
    console.log(config.collection + '已创建');
    console.log('正在导入数据...');
    if (!config.data.length) {
        console.log('没有可导入的数据!');
    }
    else {
        await addData(collection, config.data);
        console.log('导入完成!');
    }
    generateTables(schema, configs, ++index);
};
const addData = async (collection, data) => {
    const tasks = data.map((item) => {
        return collection.add(item).execute();
    });
    return Promise.all(tasks);
};
const test = async () => {
    const session = await (0, exports.connect)();
    console.log('已连接数据库,准备初始化数据库表');
    (0, exports.initTables)(session, 'ms');
};
exports.test = test;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlzcWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbHMvbXlzcWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUNBQTBDO0FBQzFDLGlEQUFrRDtBQUMzQyxNQUFNLE9BQU8sR0FBRyxHQUFHLEVBQUU7SUFDMUIsT0FBTyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ3ZCLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLFFBQVE7UUFDbEIsSUFBSSxFQUFFLFdBQVc7UUFDakIsSUFBSSxFQUFFLEtBQUs7S0FDWixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFQVyxRQUFBLE9BQU8sV0FPbEI7QUFDRjs7OztHQUlHO0FBQ0ksTUFBTSxhQUFhLEdBQUcsS0FBSyxFQUNoQyxPQUF1QixFQUN2QixVQUFrQixFQUNsQixjQUFzQixFQUN0QixFQUFFO0lBQ0YsSUFBSTtRQUNGLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDekMsTUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNwRCxPQUFPLFVBQVUsQ0FBQztLQUNuQjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsY0FBYyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDcEI7QUFDSCxDQUFDLENBQUM7QUFiVyxRQUFBLGFBQWEsaUJBYXhCO0FBQ0ssTUFBTSxRQUFRLEdBQUcsS0FBSyxFQUMzQixPQUF1QixFQUN2QixVQUFrQixFQUNsQixTQUFpQixFQUNqQixFQUFFO0lBQ0YsSUFBSTtRQUNGLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDekMsTUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDLFFB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