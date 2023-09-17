"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const controller_1 = require("../controller");
const router = express.Router();
// 详情
router.get('/source/:id', controller_1.Source.detail);
// 列表
router.get('/source', controller_1.Source.get);
// 修改
router.put('/source/:id', controller_1.Source.put);
// 批量删除
router.delete('/source', controller_1.Source.del);
// 新增
router.post('/source', controller_1.Source.post);
// 批量修改
router.patch('/source', controller_1.Source.patch);
// 批量添加
router.post('/source/addmany', controller_1.Source.addMany);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU291cmNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JvdXRlci9Tb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBb0M7QUFDcEMsOENBQXVDO0FBRXZDLE1BQU0sTUFBTSxHQUFtQixPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDaEQsS0FBSztBQUNMLE1BQU0sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLG1CQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDekMsS0FBSztBQUNMLE1BQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLG1CQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbEMsS0FBSztBQUNMLE1BQU0sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLG1CQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDdEMsT0FBTztBQUNQLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLG1CQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDckMsS0FBSztBQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLG1CQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDcEMsT0FBTztBQUNQLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLG1CQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdEMsT0FBTztBQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsbUJBQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMvQyxrQkFBZSxNQUFNLENBQUMifQ==