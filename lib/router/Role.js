"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const controller_1 = require("../controller");
const router = express.Router();
// 详情
router.get('/role/:id', controller_1.Role.detail);
// 列表
router.get('/role', controller_1.Role.get);
// 修改
router.put('/role/:id', controller_1.Role.put);
// 批量删除
router.delete('/role', controller_1.Role.del);
// 新增
router.post('/role', controller_1.Role.post);
// 批量修改
router.patch('/role', controller_1.Role.patch);
// 批量添加
router.post('/role/addmany', controller_1.Role.addMany);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm9sZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXIvUm9sZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUFvQztBQUNwQyw4Q0FBcUM7QUFFckMsTUFBTSxNQUFNLEdBQW1CLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNoRCxLQUFLO0FBQ0wsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsaUJBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNyQyxLQUFLO0FBQ0wsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsaUJBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM5QixLQUFLO0FBQ0wsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsaUJBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNsQyxPQUFPO0FBQ1AsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsaUJBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNqQyxLQUFLO0FBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsaUJBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNoQyxPQUFPO0FBQ1AsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsaUJBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNsQyxPQUFPO0FBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsaUJBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMzQyxrQkFBZSxNQUFNLENBQUMifQ==