import { Movie } from '../db';
import { Request, Response, NextFunction } from 'express';
import * as fs from 'fs/promises';
import * as path from 'path';
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
const readFile = async (root: string, outFilePaths: string[]) => {
  const dirents = await fs.readdir(root, { withFileTypes: true });
  dirents.map((entry) => {
    if (entry.isFile()) {
      outFilePaths.push(path.resolve(root, entry.name));
      console.log('文件路径:' + path.resolve(root, entry.name));
    } else if (entry.isDirectory()) {
      console.log('文件夹：' + path.resolve(root, entry.name));
      readFile(path.resolve(root, entry.name),outFilePaths);
    } else if (entry.isSymbolicLink()) {
      console.log(`symbolic link name: ${path.resolve(root, entry.name)}`);
    }
  });
}
export const get = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const db = new Movie();
    readFile('D:\\18407\\Videos',[])
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
}
