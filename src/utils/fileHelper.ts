import { Dirent } from 'fs';
import * as fs from 'fs/promises';
import { resolve } from 'path';

export const genetaPaths = (exts?: string[]) => {
  const outFilePaths: { name: string; path: string; directs: string[] }[] = [];
  const _resolveDirect = async (root, entry: Dirent, directs: string[]) => {
    const name = entry.name;
    const path = resolve(root, name);
    if (entry.isFile()) {
      const splited = entry.name.split('.');
      const ext = splited[splited.length - 1];
      if (ext && exts.indexOf(ext) !== -1) {
        outFilePaths.push({ path, name, directs });
      }
    } else if (entry.isDirectory()) {
      await readFile(path, directs);
    }
  };
  const readFile = async (rootPath: string, directs: string[]) => {
    const dirents = await fs.readdir(rootPath, { withFileTypes: true });
    const proS: any[] = [];
    dirents.map((entry) => {
      proS.push(_resolveDirect(rootPath, entry, [...directs, entry.name]));
    });
    await Promise.all(proS);
    return outFilePaths;
  };
  return {
    readFile,
  };
};

export const base64ToImage = async (id: string, data: string) => {
  const base64 = data.replace(/^data:image\/\w+;base64,/, ''); //去掉图片base64码前面部分data:image/png;base64
  const dataBuffer = Buffer.from(base64, 'base64'); //把base64码转成buffer对象，
  //用fs写入文件
  await fs.writeFile('E:/视频/images/' + id + '.png', dataBuffer);
};
