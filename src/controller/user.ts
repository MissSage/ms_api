import { User } from '../db';
import { Request, Response, NextFunction } from 'express';
export const post = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = new User();
    const row = await user.post(req.body);
    const ids = row.getGeneratedIds();
    const nUser = await user.detail(ids?.[0]);
    console.log(nUser);

    res.status(201).json({
      data: nUser,
    });
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
    const user = new User();
    await user.put(req.params.id, req.body);
    const nUser = await user.detail(req.params.id);
    res.status(200).json({
      data: nUser,
    });
  } catch (error) {
    next(error);
  }
};
export const del = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = new User();
    await user.del(req.params.id);
    res.send(req.params.id);
  } catch (error) {
    next(error);
  }
};
export const get = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = new User();
    const users = await user.get({
      query: req.params as never,
      pagination: {
        page: req.params.page ? Number(req.params.page) : 1,
        size: req.params.size ? Number(req.params.size) : 0,
      },
    });
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
    const db = new User();
    console.log(req.params);

    const user = await db.detail(req.params?.id);
    res.send({
      data: user,
    });
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
