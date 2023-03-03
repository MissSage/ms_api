import { Movie } from '../db';
import { Request, Response, NextFunction } from 'express';
import { genetaPaths } from '../utils/fileHelper';
import { resolve } from 'path';
import { CollectionAdd } from '@mysql/xdevapi';
export const post = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const db = new Movie();
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
      const db = new Movie();
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
    const db = new Movie();
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
    const db = new Movie();
    const rows = await db.get(req);
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
    const db = new Movie();
    const row = await db.detail(req.params.id as string);
    res.status(200).json({
      ...(row || {}),
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
/**
 *
 * @param req {tags: string|标签,path: ''}
 * @param res
 * @param next
 */
export const Import = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const inputPath = req.body.path as string;
    const tags = req.body.tags as string;
    if (!inputPath) next(new Error('path值无效'));
    const rootPath = resolve(inputPath);
    let files = await genetaPaths().start(rootPath);
    if (req.body.replacePath) {
      const replaceStr = req.body.replacePath.replace(/\\/g, '/');
      console.log('正在更换根路径');
      files = files.map((item) => {
        item.path = item.path
          .replace(/\\/g, '/')
          .replace(inputPath, replaceStr);
        return item;
      });
    }
    const collection = await new Movie()._getCollection();
    let add: CollectionAdd = undefined;
    files.map((item) => {
      const row = {
        title: item.name,
        url: item.path,
        img: '',
        tags,
        createTime: new Date().valueOf(),
      };
      if (add) {
        add = add.add(row);
      } else {
        add = collection.add(row);
      }
    });
    const result = await add.execute();
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
