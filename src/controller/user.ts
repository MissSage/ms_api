import { User } from '../db';
import { Request, Response, NextFunction } from 'express';
export const post = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = new User();
    const row = await user.add(req.body);
    const ids = row.getGeneratedIds();
    const nUser = await user.find({
      query: { _id: ids?.[0] },
      pagination: { page: 1, size: 20 },
    });
    res.status(201).json(nUser);
  } catch (error) {
    next(error);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    res.send('login');
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
    debugger;
    const user = new User();
    const users = await user.find();
    res.send({
      data: users,
    });
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
