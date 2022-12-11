import { Response } from 'express';
declare const erorrHandler: () => (err: any, req: any, res: Response, next: any) => void;
export default erorrHandler;
