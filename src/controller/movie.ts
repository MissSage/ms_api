import { Request, Response, NextFunction } from 'express';
export const post = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(req.body);
    
    res.send('post');
  } catch (error) {
    next(error);
  }
};
export const put = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send('put');
  } catch (error) {
    next(error);
  }
};
export const del = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send('del');
  } catch (error) {
    next(error);
  }
};
export const get = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send('get');
  } catch (error) {
    next(error);
  }
};
export const detail = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    res.send('detail');
  } catch (error) {
    next(error);
  }
};
export const patch = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      res.send('patch');
    } catch (error) {
      next(error);
    }
  };
  