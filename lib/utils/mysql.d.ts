import { Session, DocumentOrJSON } from '@mysql/xdevapi';
import { Options } from '@mysql/xdevapi/types/lib/DevAPI/Connection';
import { Request } from 'express';
export declare class Base {
    constructor(properties: {
        schema: string;
        collection: string;
        collectionProperties?: string | Options;
    });
    schema: string;
    collection: string;
    session: Session;
    collectionProperties: string | Options;
    /**
     * 连接数据库
     */
    _connect(): Promise<void>;
    /**
     * 连接表
     * @returns
     */
    _getCollection(): Promise<import("@mysql/xdevapi/types/lib/DevAPI/Collection").default>;
    /**
     * 查询
     * @param req 查询条件
     * @param find 自定义的查询，不配置则进行精确查找
     * @returns
     */
    get(req: Request, findStr?: string): Promise<{
        data: import("@mysql/xdevapi").Document[];
        total: number;
    }>;
    detail(_id: string): Promise<import("@mysql/xdevapi").Document>;
    post(params: DocumentOrJSON): Promise<import("@mysql/xdevapi/types/lib/DevAPI/Result").default>;
    put(id: string, params: DocumentOrJSON): Promise<import("@mysql/xdevapi/types/lib/DevAPI/Result").default>;
    patch(req: Request): Promise<any[]>;
    del(ids: string[]): Promise<any[]>;
}
