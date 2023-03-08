import { Session, DocumentOrJSON, Collection } from '@mysql/xdevapi';
import { Options } from '@mysql/xdevapi/types/lib/DevAPI/Connection';
import { Request } from 'express';
export declare class Base {
    constructor(properties: {
        schema: string;
        collection: string;
        collectionProperties?: string | Options;
    });
    schema: string;
    collectionName: string;
    session: Session;
    collectionProperties: string | Options;
    /**
     * 连接表
     * @returns
     */
    _getCollection(): Promise<Collection | undefined>;
    _dispose(): Promise<void>;
    /**
     * 查询
     * @param req 查询条件
     * @param find 自定义的查询，不配置则进行精确查找
     * @returns
     */
    get(query?: Record<string, any>, findStr?: string): Promise<{
        data: import("@mysql/xdevapi").Document[];
        total: number;
    }>;
    /**
     * 详情
     * @param _id
     * @returns
     */
    detail(_id: string): Promise<import("@mysql/xdevapi").Document>;
    findByIds(ids: any[]): Promise<any[]>;
    /**
     * 新增
     * @param params
     * @returns
     */
    post(params: DocumentOrJSON): Promise<import("@mysql/xdevapi/types/lib/DevAPI/Result").default>;
    put(id: string, params: DocumentOrJSON): Promise<import("@mysql/xdevapi/types/lib/DevAPI/Result").default>;
    patch(req: Request): Promise<any[]>;
    /**
     * 一次添加多个
     * @param rows
     * @returns
     */
    addMany(rows: any[]): Promise<import("@mysql/xdevapi/types/lib/DevAPI/Result").default>;
    del(ids: string[]): Promise<any[]>;
}
