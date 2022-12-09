import mysqlx = require('@mysql/xdevapi');
import schemaConfig = require('../config/schema');
export const connect = () => {
  return mysqlx.getSession({
    user: 'root',
    password: '960124',
    host: 'localhost',
    port: 33060,
  });
};
/**
 * 连接到ms数据库下的指定表名
 * @param tableName 表名
 * @returns
 */
export const getCollection = async (
  session: mysqlx.Session,
  schemaName: string,
  collectionName: string,
) => {
  try {
    const db = session.getSchema(schemaName);
    const collection = db.getCollection(collectionName);
    return collection;
  } catch (error) {
    console.log('连接到表' + collectionName + '时出错：');
    console.dir(error);
  }
};
export const getTable = async (
  session: mysqlx.Session,
  schemaName: string,
  tableName: string,
) => {
  try {
    const db = session.getSchema(schemaName);
    const collection = db.getTable(tableName);
    console.log('已连接到表user');
    return collection;
  } catch (error) {
    console.log('连接到表' + tableName + '时出错：');
    console.dir(error);
  }
};
/**
 * 检查数据库表，如果没有则生成
 */
export const initTables = async (
  session: mysqlx.Session,
  schemaName: string,
) => {
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
const generateTables = async (
  schema: mysqlx.Schema,
  configs: {
    collection: string;
    data: [];
  }[],
  index: number,
) => {
  if (index >= configs.length) return;
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
  } else {
    await addData(collection, config.data);
    console.log('导入完成!');
  }
  generateTables(schema, configs, ++index);
};
const addData = async (collection: mysqlx.Collection, data) => {
  const tasks = data.map((item) => {
    return collection.add(item).execute();
  });
  return Promise.all(tasks);
};
export const test = async () => {
  const session = await connect();
  console.log('已连接数据库,准备初始化数据库表');
  initTables(session, 'ms');
};
