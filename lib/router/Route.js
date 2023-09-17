"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const controller_1 = require("../controller");
const router = express.Router();
// 详情
router.get('/route/:id', controller_1.Route.detail);
// 列表
router.get('/route', controller_1.Route.get);
// 修改
router.put('/route/:id', controller_1.Route.put);
// 批量删除
router.delete('/route', controller_1.Route.del);
// 新增
router.post('/route', controller_1.Route.post);
// 批量修改
router.patch('/route', controller_1.Route.patch);
// 批量添加
router.post('/route/addmany', controller_1.Route.addMany);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVyL1JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQW9DO0FBQ3BDLDhDQUFzQztBQUV0QyxNQUFNLE1BQU0sR0FBbUIsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2hELEtBQUs7QUFDTCxNQUFNLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxrQkFBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3ZDLEtBQUs7QUFDTCxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxrQkFBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2hDLEtBQUs7QUFDTCxNQUFNLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxrQkFBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3BDLE9BQU87QUFDUCxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxrQkFBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ25DLEtBQUs7QUFDTCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxrQkFBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2xDLE9BQU87QUFDUCxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxrQkFBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3BDLE9BQU87QUFDUCxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLGtCQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0Msa0JBQWUsTUFBTSxDQUFDIn0=