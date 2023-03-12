"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patch = exports.detail = exports.get = exports.del = exports.put = exports.post = void 0;
const db_1 = require("../db");
const post = async (req, res, next) => {
    try {
        const db = new db_1.MoviePlatforms();
        const platforms = req.body.platforms;
        if (platforms?.length) {
            const collection = await db._getCollection();
            const pS = [];
            platforms.map((item) => {
                pS.push(collection
                    .add({
                    name: item,
                    createTime: new Date().valueOf(),
                })
                    .execute());
            });
            await Promise.all(pS);
            res.status(201).json({});
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
            const db = new db_1.MoviePlatforms();
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
        const db = new db_1.MoviePlatforms();
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
        const db = new db_1.MoviePlatforms();
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
        const db = new db_1.MoviePlatforms();
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
        const db = await new db_1.MoviePlatforms();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW92aWVQbGF0Zm9ybXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udHJvbGxlci9Nb3ZpZVBsYXRmb3Jtcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4QkFBdUM7QUFFaEMsTUFBTSxJQUFJLEdBQUcsS0FBSyxFQUFFLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0IsRUFBRSxFQUFFO0lBQzVFLElBQUk7UUFDRixNQUFNLEVBQUUsR0FBRyxJQUFJLG1CQUFjLEVBQUUsQ0FBQztRQUNoQyxNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNyQyxJQUFJLFNBQVMsRUFBRSxNQUFNLEVBQUU7WUFDckIsTUFBTSxVQUFVLEdBQUcsTUFBTSxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDN0MsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBQ2QsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUNyQixFQUFFLENBQUMsSUFBSSxDQUNMLFVBQVU7cUJBQ1AsR0FBRyxDQUFDO29CQUNILElBQUksRUFBRSxJQUFJO29CQUNWLFVBQVUsRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRTtpQkFDakMsQ0FBQztxQkFDRCxPQUFPLEVBQUUsQ0FDYixDQUFDO1lBQ0osQ0FBQyxDQUFDLENBQUM7WUFDSCxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDdEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDMUI7S0FDRjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2I7QUFDSCxDQUFDLENBQUM7QUF2QlcsUUFBQSxJQUFJLFFBdUJmO0FBQ0ssTUFBTSxHQUFHLEdBQUcsS0FBSyxFQUFFLEdBQVksRUFB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