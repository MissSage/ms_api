export declare const genetaPaths: (exts?: string[]) => {
    readFile: (rootPath: string, directs: string[]) => Promise<{
        name: string;
        path: string;
        directs: string[];
    }[]>;
};
export declare const base64ToImage: (id: string, data: string) => Promise<void>;
