import { Session, CollectionDocuments, DocumentOrJSON, Scalar } from '@mysql/xdevapi';
export declare class Base {
    constructor(properties: {
        schema: string;
        collection: string;
        collectionProperties?: string | Record<string, any>;
    });
    schema: string;
    collection: string;
    session: Session;
    collectionProperties: any;
    _connect(): Promise<void>;
    _getCollection(): Promise<import("@mysql/xdevapi/types/lib/DevAPI/Collection").default>;
    find(params?: {
        query?: {
            [key: string]: Scalar;
        };
        pagination?: {
            page: number;
            size: number;
        };
        sort?: {
            type: 'asc' | 'desc';
            field: string;
        };
    }): Promise<import("@mysql/xdevapi").Document[]>;
    add(params: CollectionDocuments): Promise<import("@mysql/xdevapi/types/lib/DevAPI/Result").default>;
    updateDoc(id: string, params: DocumentOrJSON): Promise<import("@mysql/xdevapi/types/lib/DevAPI/Result").default>;
    deleteDoc(id: string): Promise<import("@mysql/xdevapi/types/lib/DevAPI/Result").default>;
}
