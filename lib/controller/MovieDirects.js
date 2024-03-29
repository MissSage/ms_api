"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMany = exports.patch = exports.detail = exports.get = exports.del = exports.put = exports.post = void 0;
const db_1 = require("../db");
const post = async (req, res, next) => {
    try {
        const db = new db_1.MovieDirects();
        const row = await db.post(req.body);
        const ids = row.getGeneratedIds();
        const result = await db.detail(ids?.[0]);
        res.status(201).json({
            message: '操作成功',
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
            const db = new db_1.MovieDirects();
            const row = await db.put(req.params.id, req.body);
            res.status(200).json({
                data: row,
                message: '操作成功',
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
        const db = new db_1.MovieDirects();
        await db.del(req.body.ids);
        res.status(200).json({
            message: '操作成功',
        });
    }
    catch (error) {
        next(error);
    }
};
exports.del = del;
const get = async (req, res, next) => {
    try {
        const db = new db_1.MovieDirects();
        const rows = await db.get(req.query);
        res.status(200).json({
            ...(rows || {}),
            message: '操作成功',
        });
    }
    catch (error) {
        next(error);
    }
};
exports.get = get;
const detail = async (req, res, next) => {
    try {
        const db = new db_1.MovieDirects();
        const row = await db.detail(req.params.id);
        res.status(200).json({
            data: row,
            message: '操作成功',
        });
    }
    catch (error) {
        next(error);
    }
};
exports.detail = detail;
const patch = async (req, res, next) => {
    try {
        const db = await new db_1.MovieDirects();
        await db.patch(req);
        res.status(200).send({
            message: '操作成功',
        });
    }
    catch (error) {
        next(error);
    }
};
exports.patch = patch;
const addMany = async (req, res, next) => {
    try {
        const db = await new db_1.MovieDirects();
        const result = await db.addMany(req.body);
        res.status(201).send({
            message: '操作成功',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.addMany = addMany;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW92aWVEaXJlY3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXIvTW92aWVEaXJlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhCQUFxQztBQUU5QixNQUFNLElBQUksR0FBRyxLQUFLLEVBQUUsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQixFQUFFLEVBQUU7SUFDNUUsSUFBSTtRQUNGLE1BQU0sRUFBRSxHQUFHLElBQUksaUJBQVksRUFBRSxDQUFDO1FBQzlCLE1BQU0sR0FBRyxHQUFHLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ2xDLE1BQU0sTUFBTSxHQUFHLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ25CLE9BQU8sRUFBRSxNQUFNO1lBQ2YsSUFBSSxFQUFFLE1BQU07U0FDYixDQUFDLENBQUM7S0FDSjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2I7QUFDSCxDQUFDLENBQUM7QUFiVyxRQUFBLElBQUksUUFhZjtBQUNLLE1BQU0sR0FBRyxHQUFHLEtBQUssRUFBRSxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCLEVBQUUsRUFBRTtJQUMzRSxJQUFJO1FBQ0YsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7UUFDMUIsSUFBSSxFQUFFLEtBQUssU0FBUyxFQUFFO1lBQ3BCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNuQixPQUFPLEVBQUUsWUFBWTtnQkFDckIs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