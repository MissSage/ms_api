"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const controller_1 = require("../controller");
const router = express.Router();
// 详情
router.get('/image/:id', controller_1.Image.detail);
// 列表
router.get('/image', controller_1.Image.get);
// 修改
router.put('/image/:id', controller_1.Image.put);
// 批量删除
router.delete('/image', controller_1.Image.del);
// 新增
router.post('/image', controller_1.Image.post);
// 批量修改
router.patch('/image', controller_1.Image.patch);
// 批量导入
router.post('/image/import', controller_1.Image.Import);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW1hZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVyL0ltYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQW9DO0FBQ3BDLDhDQUFzQztBQUV0QyxNQUFNLE1BQU0sR0FBbUIsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2hELEtBQUs7QUFDTCxNQUFNLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxrQkFBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3ZDLEtBQUs7QUFDTCxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxrQkFBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2hDLEtBQUs7QUFDTCxNQUFNLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxrQkFBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3BDLE9BQU87QUFDUCxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxrQkFBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ25DLEtBQUs7QUFDTCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxrQkFBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2xDLE9BQU87QUFDUCxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxrQkFBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3BDLE9BQU87QUFDUCxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxrQkFBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRTNDLGtCQUFlLE1BQU0sQ0FBQyJ9