"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const controller_1 = require("../controller");
const router = express.Router();
// 详情
router.get('/moviestarrings/:id', controller_1.MovieStarrings.detail);
// 列表
router.get('/moviestarrings', controller_1.MovieStarrings.get);
// 修改
router.put('/moviestarrings/:id', controller_1.MovieStarrings.put);
// 批量删除
router.delete('/moviestarrings', controller_1.MovieStarrings.del);
// 新增
router.post('/moviestarrings', controller_1.MovieStarrings.post);
// 批量修改
router.patch('/moviestarrings', controller_1.MovieStarrings.patch);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW92aWVTdGFycmluZ3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVyL01vdmllU3RhcnJpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQW9DO0FBQ3BDLDhDQUErQztBQUUvQyxNQUFNLE1BQU0sR0FBbUIsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2hELEtBQUs7QUFDTCxNQUFNLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLDJCQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDekQsS0FBSztBQUNMLE1BQU0sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsMkJBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNsRCxLQUFLO0FBQ0wsTUFBTSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSwyQkFBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3RELE9BQU87QUFDUCxNQUFNLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLDJCQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDckQsS0FBSztBQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsMkJBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNwRCxPQUFPO0FBQ1AsTUFBTSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSwyQkFBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBRXRELGtCQUFlLE1BQU0sQ0FBQyJ9