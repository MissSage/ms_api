"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const controller_1 = require("../controller");
const router = express.Router();
// 详情
router.get('/musicfavorite/:id', controller_1.MusicFavorite.detail);
// 列表
router.get('/musicfavorite', controller_1.MusicFavorite.get);
// 修改
router.put('/musicfavorite/:id', controller_1.MusicFavorite.put);
// 批量删除
router.delete('/musicfavorite', controller_1.MusicFavorite.del);
// 新增
router.post('/musicfavorite', controller_1.MusicFavorite.post);
// 批量修改
router.patch('/musicfavorite', controller_1.MusicFavorite.patch);
// 切换是否收藏
router.post('/musicfavorite/toggle', controller_1.MusicFavorite.toggle);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXVzaWNGYXZvcml0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXIvTXVzaWNGYXZvcml0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUFvQztBQUNwQyw4Q0FBOEM7QUFFOUMsTUFBTSxNQUFNLEdBQW1CLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNoRCxLQUFLO0FBQ0wsTUFBTSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSwwQkFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3ZELEtBQUs7QUFDTCxNQUFNLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLDBCQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDaEQsS0FBSztBQUNMLE1BQU0sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsMEJBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNwRCxPQUFPO0FBQ1AsTUFBTSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSwwQkFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ25ELEtBQUs7QUFDTCxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLDBCQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbEQsT0FBTztBQUNQLE1BQU0sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsMEJBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwRCxTQUFTO0FBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSwwQkFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRTNELGtCQUFlLE1BQU0sQ0FBQyJ9