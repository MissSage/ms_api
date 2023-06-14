"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.base64ToImage = exports.genetaPaths = void 0;
const fs = require("fs/promises");
const path_1 = require("path");
const genetaPaths = (exts) => {
    const outFilePaths = [];
    const _resolveDirect = async (root, entry, directs) => {
        const name = entry.name;
        const path = (0, path_1.resolve)(root, name);
        if (entry.isFile()) {
            const splited = entry.name.split('.');
            const ext = splited[splited.length - 1];
            if (ext && exts.indexOf(ext.toLowerCase()) !== -1) {
                outFilePaths.push({ path, name, directs });
            }
        }
        else if (entry.isDirectory()) {
            await readFile(path, directs);
        }
    };
    const readFile = async (rootPath, directs) => {
        const dirents = await fs.readdir(rootPath, { withFileTypes: true });
        const proS = [];
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
exports.genetaPaths = genetaPaths;
const base64ToImage = async (id, data) => {
    const base64 = data.replace(/^data:image\/\w+;base64,/, ''); //去掉图片base64码前面部分data:image/png;base64
    const dataBuffer = Buffer.from(base64, 'base64'); //把base64码转成buffer对象，
    //用fs写入文件
    await fs.writeFile('E:/视频/images/' + id + '.png', dataBuffer);
};
exports.base64ToImage = base64ToImage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZUhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9maWxlSGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLGtDQUFrQztBQUNsQywrQkFBK0I7QUFFeEIsTUFBTSxXQUFXLEdBQUcsQ0FBQyxJQUFlLEVBQUUsRUFBRTtJQUM3QyxNQUFNLFlBQVksR0FBd0QsRUFBRSxDQUFDO0lBQzdFLE1BQU0sY0FBYyxHQUFHLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBYSxFQUFFLE9BQWlCLEVBQUUsRUFBRTtRQUN0RSxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ3hCLE1BQU0sSUFBSSxHQUFHLElBQUEsY0FBTyxFQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNsQixNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN0QyxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN4QyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO2dCQUNqRCxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO2FBQzVDO1NBQ0Y7YUFBTSxJQUFJLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUM5QixNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDL0I7SUFDSCxDQUFDLENBQUM7SUFDRixNQUFNLFFBQVEsR0FBRyxLQUFLLEVBQUUsUUFBZ0IsRUFBRSxPQUFpQixFQUFFLEVBQUU7UUFDN0QsTUFBTSxPQUFPLEdBQUcsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3BFLE1BQU0sSUFBSSxHQUFVLEVBQUUsQ0FBQztRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsT0FBTyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkUsQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQyxDQUFDO0lBQ0YsT0FBTztRQUNMLFFBQVE7S0FDVCxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBM0JXLFFBQUEsV0FBVyxlQTJCdEI7QUFFSyxNQUFNLGFBQWEsR0FBRyxLQUFLLEVBQUUsRUFBVSxFQUFFLElBQVksRUFBRSxFQUFFO0lBQzlELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsMEJBQTBCLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxzQ0FBc0M7SUFDbkcsTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxxQkFBcUI7SUFDdkUsU0FBUztJQUNULE1BQU0sRUFBRSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEdBQUcsRUFBRSxHQUFHLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztBQUNoRSxDQUFDLENBQUM7QUFMVyxRQUFBLGFBQWEsaUJBS3hCIn0=