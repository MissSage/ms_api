import { User } from '../db';
import { Request, Response, NextFunction } from 'express';
export const post = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const db = new User();
    const row = await db.post(req.body);
    const ids = row.getGeneratedIds();
    const result = await db.detail(ids?.[0]);
    res.status(201).json({
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
      const db = new User();
      const row = await db.put(req.params.id, req.body);
      res.status(200).json({
        data: row,
        message: '修改成功',
      });
    }
  } catch (error) {
    next(error);
  }
};
export const del = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const db = new User();
    await db.del(req.params.id);
    res.status(200).json({
      data: req.params.id,
    });
  } catch (error) {
    next(error);
  }
};
export const get = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const db = new User();
    const rows = await db.get({
      query: req.params,
      pagination: {
        page: parseInt(req.params.page) || 1,
        size: parseInt(req.params.size) || 50,
      },
      sort: {
        type: req.params.sortType || 'asc',
        field: req.params.sortField || '_id',
      },
    });
    res.status(200).json({
      data: rows,
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
