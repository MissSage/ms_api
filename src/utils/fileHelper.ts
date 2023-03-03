import { Dirent } from 'fs';
import * as fs from 'fs/promises';
import { resolve } from 'path';

export const genetaPaths = () => {
  const outFilePaths: { name: string; path: string }[] = [];
  const resolveDirect = async (root, entry: Dirent) => {
    const name = entry.name;
    const path = resolve(root, name);
    if (entry.isFile()) {
      outFilePaths.push({ path, name });
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
