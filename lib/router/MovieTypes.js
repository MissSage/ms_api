"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const controller_1 = require("../controller");
const router = express.Router();
// 详情
router.get('/movietypes/:id', controller_1.MovieTypes.detail);
// 列表
router.get('/movietypes', controller_1.MovieTypes.get);
// 修改
router.put('/movietypes/:id', controller_1.MovieTypes.put);
// 批量删除
router.delete('/movietypes', controller_1.MovieTypes.del);
// 新增
router.post('/movietypes', controller_1.MovieTypes.post);
// 批量修改
router.patch('/movietypes', controller_1.MovieTypes.patch);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW92aWVUeXBlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXIvTW92aWVUeXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUFvQztBQUNwQyw4Q0FBMkM7QUFFM0MsTUFBTSxNQUFNLEdBQW1CLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNoRCxLQUFLO0FBQ0wsTUFBTSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSx1QkFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2pELEtBQUs7QUFDTCxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSx1QkFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzFDLEtBQUs7QUFDTCxNQUFNLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLHVCQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDOUMsT0FBTztBQUNQLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLHVCQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDN0MsS0FBSztBQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLHVCQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDNUMsT0FBTztBQUNQLE1BQU0sQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLHVCQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7QUFFOUMsa0JBQWUsTUFBTSxDQUFDIn0=