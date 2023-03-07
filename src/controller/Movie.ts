import { Movie, Favorite } from '../db';
import { Request, Response, NextFunction } from 'express';
import { base64ToImage, genetaPaths } from '../utils/fileHelper';
import { resolve } from 'path';
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
    res.status(200).json({});
  } catch (error) {
    next(error);
  }
};
export const get = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const db = new Movie();
    let findStr = '';
    if (req.query.direct) {
      findStr = "'" + req.query.direct + "' in directs[*]";
    }
    delete req.query['direct'];
    const rows = await db.get(req.query, findStr);
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
    await db.patch(req);
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
    let files = await genetaPaths([
      'mp4',
      'MP4',
      'avi',
      'ts',
      'mkv',
      'wmv',
      'mov',
    ]).readFile(rootPath, []);
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
    const db = new Movie();
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
      return row
    });
    const result = await db.addMany(rows)
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
/**
 * 上传图片base64生成图片并保存路径到对应视频数据
 * @param req
 * @param res
 * @param next
 */
export const postImage = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const id = req.params.id;
  const data = req.body.data;
  const server = req.body.rootPath;
  if (!id || !data) {
    next(new Error('未上传数据'));
  } else {
    let url = server && decodeURIComponent(server);
    if (!url) url = 'http://localhost/images/';
    if (!url.endsWith('/')) {
      url = url + '/';
    }
    url += id + '.png';
    try {
      await base64ToImage(id, data);
      const db = new Movie();
      await db.put(id, { img: url });
      res.status(200).send({
        data: url,
      });
    } catch (error) {
      next(error);
    }
  }
};

export const favours = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const favourDB = new Favorite()
    const favours = await favourDB.get()
    const db = new Movie()
    const ids = favours.data.map(item => item.movieId)
    const result = await db.findByIds(ids)
    res.status(200).send({
      data: result,
      total: result.length,
      message: '操作成功'
    })
  } catch (error) {
    next(error)
  }

}