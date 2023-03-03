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
    await db.del(req.body.ids);
    res.status(200).json({

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
    const db = await new Movie();
    await db.patch(req)
    res.status(200).send({});
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
    if (!inputPath) next(new Error('path值无效'));
    let rootPath = resolve(decodeURIComponent(inputPath)).replace(/\\/g, '/');
    let files = await genetaPaths(['mp4', 'MP4', 'avi', 'ts','mkv','wmv']).start(rootPath);
    if (req.body.replacePath) {
      let replaceStr = decodeURIComponent(req.body.replacePath).replace(/\\/g, '/');
      console.log('正在更换根路径');
      if (rootPath.endsWith('/')) {
        rootPath = rootPath.substring(0, rootPath.length - 1)
      }
      if (replaceStr.endsWith('/')) {
        replaceStr = replaceStr.substring(0, replaceStr.length - 1)
      }
      console.log('rootPath', rootPath);
      console.log('replaceStr', replaceStr);
      files = files.map((item) => {
        item.path = item.path
          .replace(/\\/g, '/')
          .replace(rootPath, replaceStr);
        return item;
      });
    }
    const collection = await new Movie()._getCollection();
    let add: CollectionAdd = undefined;
    files.map((item) => {
      const row = {
        title: item.name,
        ...((req.query.body as any) || {}),
        url: item.path,
        img: decodeURIComponent(req.body.img).replace(/\\/g, '/'),
        tags: req.body.tags,
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
