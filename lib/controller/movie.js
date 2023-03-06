"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postImage = exports.Import = exports.patch = exports.detail = exports.get = exports.del = exports.put = exports.post = void 0;
const db_1 = require("../db");
const fileHelper_1 = require("../utils/fileHelper");
const path_1 = require("path");
const post = async (req, res, next) => {
    try {
        const db = new db_1.Movie();
        const row = await db.post(req.body);
        const ids = row.getGeneratedIds();
        const result = await db.detail(ids?.[0]);
        res.status(201).json({
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.post = post;
const put = async (req, res, next) => {
    try {
        const id = req.params?.id;
        if (id === undefined) {
            res.status(400).json({
                message: '请传入正确的参数id',
                data: null,
            });
        }
        else {
            const db = new db_1.Movie();
            const row = await db.put(req.params.id, req.body);
            res.status(200).json({
                data: row,
                message: '修改成功',
            });
        }
    }
    catch (error) {
        next(error);
    }
};
exports.put = put;
const del = async (req, res, next) => {
    try {
        const db = new db_1.Movie();
        await db.del(req.body.ids);
        res.status(200).json({});
    }
    catch (error) {
        next(error);
    }
};
exports.del = del;
const get = async (req, res, next) => {
    try {
        const db = new db_1.Movie();
        let findStr = '';
        if (req.query.direct) {
            findStr = "'" + req.query.direct + "' in directs[*]";
        }
        delete req.query['direct'];
        const rows = await db.get(req, findStr);
        res.status(200).json(rows);
    }
    catch (error) {
        next(error);
    }
};
exports.get = get;
const detail = async (req, res, next) => {
    try {
        const db = new db_1.Movie();
        const row = await db.detail(req.params.id);
        res.status(200).json({
            ...(row || {}),
        });
    }
    catch (error) {
        next(error);
    }
};
exports.detail = detail;
const patch = async (req, res, next) => {
    try {
        const db = await new db_1.Movie();
        await db.patch(req);
        res.status(200).send({});
    }
    catch (error) {
        next(error);
    }
};
exports.patch = patch;
/**
 *
 * @param req {tags: string|标签,path: ''}
 * @param res
 * @param next
 */
const Import = async (req, res, next) => {
    try {
        const inputPath = req.body.path;
        if (!inputPath)
            next(new Error('path值无效'));
        let rootPath = (0, path_1.resolve)(decodeURIComponent(inputPath)).replace(/\\/g, '/');
        let files = await (0, fileHelper_1.genetaPaths)([
            'mp4',
            'MP4',
            'avi',
            'ts',
            'mkv',
            'wmv',
            'mov',
        ]).readFile(rootPath, []);
        if (req.body.replacePath) {
            let replaceStr = decodeURIComponent(req.body.replacePath).replace(/\\/g, '/');
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
        const db = new db_1.Movie();
        const collection = await db._getCollection();
        let add = undefined;
        files.map((item) => {
            const row = {
                title: item.name,
                ...(req.query.body || {}),
                url: item.path,
                img: decodeURIComponent(req.body.img).replace(/\\/g, '/'),
                tags: req.body.tags,
                directs: item.directs || [],
                createTime: new Date().valueOf(),
            };
            if (add) {
                add = add.add(row);
            }
            else {
                add = collection.add(row);
            }
        });
        const result = await add?.execute();
        res.status(200).json({
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.Import = Import;
/**
 * 上传图片base64生成图片并保存路径到对应视频数据
 * @param req
 * @param res
 * @param next
 */
const postImage = async (req, res, next) => {
    const id = req.params.id;
    const data = req.body.data;
    const server = req.body.rootPath;
    if (!id || !data) {
        next(new Error('未上传数据'));
    }
    else {
        let url = server && decodeURIComponent(server);
        if (!url)
            url = 'http://localhost/images/';
        if (!url.endsWith('/')) {
            url = url + '/';
        }
        url += id + '.png';
        try {
            await (0, fileHelper_1.base64ToImage)(id, data);
            const db = new db_1.Movie();
            await db.put(id, { img: url });
            res.status(200).send({
                data: url,
            });
        }
        catch (error) {
            next(error);
        }
    }
};
exports.postImage = postImage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW92aWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udHJvbGxlci9Nb3ZpZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4QkFBOEI7QUFFOUIsb0RBQWlFO0FBQ2pFLCtCQUErQjtBQUV4QixNQUFNLElBQUksR0FBRyxLQUFLLEVBQUUsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQixFQUFFLEVBQUU7SUFDNUUsSUFBSTtRQUNGLE1BQU0sRUFBRSxHQUFHLElBQUksVUFBSyxFQUFFLENBQUM7UUFDdkIsTUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxNQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDbEMsTUFBTSxNQUFNLEdBQUcsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDbkIsSUFBSSxFQUFFLE1BQU07U0FDYixDQUFDLENBQUM7S0FDSjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2I7QUFDSCxDQUFDLENBQUM7QUFaVyxRQUFBLElBQUksUUFZZjtBQUNLLE1BQU0sR0FBRyxHQUFHLEtBQUssRUFBRSxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCLEVBQUUsRUFBRTtJQUMzRSxJQUFJO1FBQ0YsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7UUFDMUIsSUFBSSxFQUFFLEtBQUssU0FBUyxFQUFFO1lBQ3BCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNuQixPQUFPLEVBQUUsWUFBWTtnQkFDckIsSUFBSSxFQUFF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