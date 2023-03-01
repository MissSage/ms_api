import * as fs from 'fs/promises';
import * as path from 'path';
export const readFile = async (root: string, outFilePaths: string[]) => {
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
};