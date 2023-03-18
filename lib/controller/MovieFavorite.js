"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggle = exports.patch = exports.detail = exports.get = exports.del = exports.put = exports.post = void 0;
const db_1 = require("../db");
const post = async (req, res, next) => {
    try {
        const db = new db_1.MovieFavorite();
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
            const db = new db_1.MovieFavorite();
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
        const db = new db_1.MovieFavorite();
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
        const db = new db_1.MovieFavorite();
        const rows = await db.get(req.query);
        res.status(200).json(rows);
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
const toggle = async (req, res, next) => {
    try {
        if (!req.body.movieId) {
            next(new Error('未传入movieId'));
        }
        else {
            const db = new db_1.MovieFavorite();
            const rows = await db.get(req.body);
            if (!rows.data.length) {
                await db.post(req.body);
            }
            else {
                await db.del(rows.data.map((item) => item._id.toString()));
            }
            res.status(200).send({
                message: rows.data.length ? '已取消' : '收藏成功',
            });
        }
    }
    catch (error) {
        next(error);
    }
};
exports.toggle = toggle;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW92aWVGYXZvcml0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVyL01vdmllRmF2b3JpdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOEJBQXNDO0FBRS9CLE1BQU0sSUFBSSxHQUFHLEtBQUssRUFBRSxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCLEVBQUUsRUFBRTtJQUM1RSxJQUFJO1FBQ0YsTUFBTSxFQUFFLEdBQUcsSUFBSSxrQkFBYSxFQUFFLENBQUM7UUFDL0IsTUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxNQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDbEMsTUFBTSxNQUFNLEdBQUcsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDbkIsSUFBSSxFQUFFLE1BQU07U0FDYixDQUFDLENBQUM7S0FDSjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2I7QUFDSCxDQUFDLENBQUM7QUFaVyxRQUFBLElBQUksUUFZZjtBQUNLLE1BQU0sR0FBRyxHQUFHLEtBQUssRUFBRSxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCLEVBQUUsRUFBRTtJQUMzRSxJQUFJO1FBQ0YsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7UUFDMUIsSUFBSSxFQUFFLEtBQUssU0FBUyxFQUFFO1lBQ3BCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNuQixPQUFPLEVBQUUsWUFBWTtnQkFDckIsSUFBSSxFQUFFLElBQUk7YUFD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