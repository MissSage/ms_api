import { Request, Response, NextFunction } from 'express';
export declare const post: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const put: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const del: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const get: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const detail: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const patch: (req: Request, res: Response, next: NextFunction) => Promise<void>;
/**
 *
 * @param req {tags: string|标签,path: ''}
 * @param res
 * @param next
 */
export declare const Import: (req: Request, res: Response, next: NextFunction) => Promise<void>;
