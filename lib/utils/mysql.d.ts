import mysqlx = require('@mysql/xdevapi');
export declare const connect: () => Promise<mysqlx.Session>;
/**
 * 连接到ms数据库下的指定表名
 * @param tableName 表名
 * @returns
 */
export declare const getCollection: (session: mysqlx.Session, schemaName: string, collectionName: string) => Promise<mysqlx.Collection>;
export declare const getTable: (session: mysqlx.Session, schemaName: string, tableName: string) => Promise<mysqlx.Table>;
/**
 * 检查数据库表，如果没有则生成
 */
export declare const initTables: (session: mysqlx.Session, schemaName: string) => Promise<void>;
export declare const test: () => Promise<void>;
