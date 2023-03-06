"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patch = exports.detail = exports.get = exports.del = exports.put = exports.post = void 0;
const db_1 = require("../db");
const post = async (req, res, next) => {
    try {
        const db = new db_1.MovieTags();
        const tags = req.body.tags;
        if (tags?.length) {
            const collection = await db._getCollection();
            const pS = [];
            tags.map((item) => {
                pS.push(collection
                    .add({
                    name: item,
                    createTime: new Date().valueOf(),
                })
                    .execute());
            });
            await Promise.all(pS);
            res.status(200).json({});
        }
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
            const db = new db_1.MovieTags();
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
        const db = new db_1.MovieTags();
        await db.del(req.body.ids);
        res.status(200).json({
            data: req.params.id,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.del = del;
const get = async (req, res, next) => {
    try {
        const db = new db_1.MovieTags();
        const rows = await db.get(req);
        res.status(200).json({
            data: rows,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.get = get;
const detail = async (req, res, next) => {
    try {
        res.send('detail');
    }
    catch (error) {
        next(error);
    }
};
exports.detail = detail;
const patch = async (req, res, next) => {
    try {
        res.send('patch');
    }
    catch (error) {
        next(error);
    }
};
exports.patch = patch;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW92aWVUYWdzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXIvTW92aWVUYWdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhCQUFrQztBQUUzQixNQUFNLElBQUksR0FBRyxLQUFLLEVBQUUsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQixFQUFFLEVBQUU7SUFDNUUsSUFBSTtRQUNGLE1BQU0sRUFBRSxHQUFHLElBQUksY0FBUyxFQUFFLENBQUM7UUFDM0IsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDM0IsSUFBSSxJQUFJLEVBQUUsTUFBTSxFQUFFO1lBQ2hCLE1BQU0sVUFBVSxHQUFHLE1BQU0sRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQzdDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQztZQUNkLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDaEIsRUFBRSxDQUFDLElBQUksQ0FDTCxVQUFVO3FCQUNQLEdBQUcsQ0FBQztvQkFDSCxJQUFJLEVBQUUsSUFBSTtvQkFDVixVQUFVLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUU7aUJBQ2pDLENBQUM7cUJBQ0QsT0FBTyxFQUFFLENBQ2IsQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3RCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzFCO0tBQ0Y7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNiO0FBQ0gsQ0FBQyxDQUFDO0FBdkJXLFFBQUEsSUFBSSxRQXVCZjtBQUNLLE1BQU0sR0FBRyxHQUFHLEtBQUssRUFBRSxHQUFZLEVBQUUsR0FBYSxFQUFF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