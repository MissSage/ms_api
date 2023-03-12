import { MovieTypes } from '../db';
import { Request, Response, NextFunction } from 'express';
export const post = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const db = new MovieTypes();
    const types = req.body.types;
    if (types?.length) {
      const collection = await db._getCollection();
      const pS = [];
      types.map((item) => {
        pS.push(
          collection
            .add({
              name: item,
              createTime: new Date().valueOf(),
            })
            .execute(),
        );
      });
      await Promise.all(pS);
      res.status(201).json({});
    }
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
      const db = new MovieTypes();
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
    const db = new MovieTypes();
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
    const db = new MovieTypes();
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
    const db = new MovieTypes();
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
    const db = await new MovieTypes();
    await db.patch(req);
    res.status(200).send({
      message: '操作成功',
    });
  } catch (error) {
    next(error);
  }
};
