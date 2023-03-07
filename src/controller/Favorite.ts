import { Favorite } from '../db';
import { Request, Response, NextFunction } from 'express';
export const post = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const db = new Favorite();
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
      const db = new Favorite();
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
    const db = new Favorite();
    await db.del(req.body.ids);
    res.status(200).json({
      data: req.params.id,
    });
  } catch (error) {
    next(error);
  }
};
export const get = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const db = new Favorite();
    const rows = await db.get(req.query);
    res.status(200).json(rows);
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

export const toggle = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.body.movieId) {
      next(new Error('未传入movieId'))
    } else {
      const db = new Favorite()
      const rows = await db.get(req.body)
      if (!rows.data.length) {
        await db.post(req.body)
      } else {
        await db.del(rows.data.map(item => item._id.toString()))
      }
      res.status(200).send({
        message: rows.data.length ? '已取消' : '收藏成功'
      })
    }

  } catch (error) {
    next(error)
  }
}