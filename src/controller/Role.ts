import { Role } from '../db';
import { Request, Response, NextFunction } from 'express';
export const post = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const db = new Role();
    const row = await db.post(req.body);
    const ids = row.getGeneratedIds();
    const result = await db.detail(ids?.[0]);
    res.status(201).json({
      message: '操作成功',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
export const put = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params?.id;
    if (id === undefined) {
      res.status(400).json({
        message: '请传入正确的参数id',
        data: null,
      });
    } else {
      const db = new Role();
      const row = await db.put(req.params.id, req.body);
      res.status(200).json({
        data: row,
        message: '操作成功',
      });
    }
  } catch (error) {
    next(error);
  }
};
export const del = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const db = new Role();
    await db.del(req.body.ids);
    res.status(200).json({
      message: '操作成功',
    });
  } catch (error) {
    next(error);
  }
};
export const get = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const db = new Role();
    const rows = await db.get(req.query);
    res.status(200).json({
      ...(rows || {}),
      message: '操作成功',
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
    const db = new Role();
    const row = await db.detail(req.params.id as string);
    res.status(200).json({
      data: row,
      message: '操作成功',
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
    const db = await new Role();
    await db.patch(req);
    res.status(200).send({
      message: '操作成功',
    });
  } catch (error) {
    next(error);
  }
};

export const addMany = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const db = await new Role();
    const result = await db.addMany(req.body);
    res.status(201).send({
      message: '操作成功',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
