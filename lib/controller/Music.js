"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.favours = exports.postImage = exports.Import = exports.patch = exports.detail = exports.get = exports.del = exports.put = exports.post = void 0;
const db_1 = require("../db");
const fileHelper_1 = require("../utils/fileHelper");
const path_1 = require("path");
const post = async (req, res, next) => {
    try {
        const db = new db_1.Music();
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
            const db = new db_1.Music();
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
        const db = new db_1.Music();
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
        const db = new db_1.Music();
        let findStr = '';
        if (req.query.direct) {
            findStr = "'" + req.query.direct + "' in directs[*]";
        }
        if (req.query.type) {
            findStr = " '" + req.query.type + "' in types[*] ";
        }
        if (req.query.platform) {
            findStr = " '" + req.query.type + "' in platforms[*] ";
        }
        delete req.query['direct'];
        delete req.query['type'];
        const rows = await db.get(req.query, findStr);
        res.status(200).json(rows);
    }
    catch (error) {
        next(error);
    }
};
exports.get = get;
const detail = async (req, res, next) => {
    try {
        const db = new db_1.Music();
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
        const db = await new db_1.Music();
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
        let files = await (0, fileHelper_1.genetaPaths)(['mp3']).readFile(rootPath, []);
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
        const db = new db_1.Music();
        const rows = files.map((item) => {
            const row = {
                title: item.name,
                ...(req.query.body || {}),
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
            const db = new db_1.Music();
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
const favours = async (req, res, next) => {
    try {
        const favourDB = new db_1.MovieFavorite();
        const favours = await favourDB.get();
        const db = new db_1.Music();
        const ids = favours.data.map((item) => item.MusicId);
        const result = await db.findByIds(ids);
        res.status(200).send({
            data: result,
            total: result.length,
            message: '操作成功',
        });
    }
    catch (error) {
        next(error);
    }
};
exports.favours = favours;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXVzaWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udHJvbGxlci9NdXNpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4QkFBNkM7QUFFN0Msb0RBQWlFO0FBQ2pFLCtCQUErQjtBQUN4QixNQUFNLElBQUksR0FBRyxLQUFLLEVBQUUsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQixFQUFFLEVBQUU7SUFDNUUsSUFBSTtRQUNGLE1BQU0sRUFBRSxHQUFHLElBQUksVUFBSyxFQUFFLENBQUM7UUFDdkIsTUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxNQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDbEMsTUFBTSxNQUFNLEdBQUcsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDbkIsSUFBSSxFQUFFLE1BQU07U0FDYixDQUFDLENBQUM7S0FDSjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2I7QUFDSCxDQUFDLENBQUM7QUFaVyxRQUFBLElBQUksUUFZZjtBQUNLLE1BQU0sR0FBRyxHQUFHLEtBQUssRUFBRSxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCLEVBQUUsRUFBRTtJQUMzRSxJQUFJO1FBQ0YsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7UUFDMUIsSUFBSSxFQUFFLEtBQUssU0FBUyxFQUFFO1lBQ3BCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNuQixPQUFPLEVBQUUsWUFBWTtnQkFDckIsSUFBSSxFQUFF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