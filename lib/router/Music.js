"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const controller_1 = require("../controller");
const router = express.Router();
// 详情
router.get('/music/:id', controller_1.Music.detail);
// 列表
router.get('/music', controller_1.Music.get);
// 修改
router.put('/music/:id', controller_1.Music.put);
// 批量删除
router.delete('/music', controller_1.Music.del);
// 新增
router.post('/music', controller_1.Music.post);
// 批量修改
router.patch('/music', controller_1.Music.patch);
// 批量上传
router.post('/music/import', controller_1.Music.Import);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXVzaWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVyL011c2ljLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQW9DO0FBQ3BDLDhDQUFzQztBQUV0QyxNQUFNLE1BQU0sR0FBbUIsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2hELEtBQUs7QUFDTCxNQUFNLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxrQkFBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3ZDLEtBQUs7QUFDTCxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxrQkFBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2hDLEtBQUs7QUFDTCxNQUFNLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxrQkFBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3BDLE9BQU87QUFDUCxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxrQkFBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ25DLEtBQUs7QUFDTCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxrQkFBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2xDLE9BQU87QUFDUCxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxrQkFBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3BDLE9BQU87QUFDUCxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxrQkFBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRTNDLGtCQUFlLE1BQU0sQ0FBQyJ9