import { Dirent } from 'fs';
import * as fs from 'fs/promises';
import { resolve } from 'path';

export const genetaPaths = (exts?: string[]) => {
  const outFilePaths: { name: string; path: string }[] = [];
  const resolveDirect = async (root, entry: Dirent) => {
    const name = entry.name;
    const path = resolve(root, name);
    if (entry.isFile()) {
      const splited = entry.name.split('.')
      const ext = splited[splited.length - 1]
      if (ext && exts.indexOf(ext) !== -1) {
        outFilePaths.push({ path, name });
      }
    } else if (entry.isDirectory()) {
      await readFile(path);
    }
  };
  const readFile = async (rootPath: string) => {
    const dirents = await fs.readdir(rootPath, { withFileTypes: true });
    const proS: any[] = [];
    dirents.map((entry) => {
      proS.push(resolveDirect(rootPath, entry));
    });
    await Promise.all(proS);
    return outFilePaths;
  };
  const start = (input: string) => {
    return readFile(input);
  };
  return {
    start,
  };
};
