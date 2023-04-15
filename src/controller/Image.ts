import { Image } from '../db';
import { Request, Response, NextFunction } from 'express';
import { resolve } from 'path';
import { genetaPaths } from '../utils/fileHelper';
export const post = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const db = new Image();
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
      const db = new Image();
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
    const db = new Image();
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
    const db = new Image();
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
    const db = new Image();
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
    const db = await new Image();
    await db.patch(req);
    res.status(200).send({
      message: '操作成功',
    });
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
    let files = await genetaPaths(['png', 'jpg', 'jpeg', 'gif']).readFile(
      rootPath,
      [],
    );
    if (req.body.replacePath) {
      let replaceStr = decodeURIComponent(req.body.replacePath).replace(
        /\\/g,
        '/',
      );
      console.log('正在更换根路径');
      if (rootPath.endsWith('/')) {
        rootPath = rootPath.substring(0, rootPath.length - 1);
      }
      if (replaceStr.endsWith('/')) {
        replaceStr = replaceStr.substring(0, replaceStr.length - 1);
      }
      console.log('rootPath', rootPath);
      console.log('replaceStr', replaceStr);
      files = files.map((item) => {
        item.path = item.path.replace(/\\/g, '/').replace(rootPath, replaceStr);
        return item;
      });
    }
    const db = new Image();
    const rows = files.map((item) => {
      const row = {
        title: item.name,
        ...((req.query.body as any) || {}),
        url: item.path,
        img: decodeURIComponent(req.body.img).replace(/\\/g, '/'),
        tags: req.body.tags,
        directs: item.directs || [],
        createTime: new Date().valueOf(),
      };
      return row;
    });
    const result = await db.addMany(rows);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
