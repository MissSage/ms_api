"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const controller_1 = require("../controller");
const router = express.Router();
// 详情
router.get('/movieplatforms/:id', controller_1.MoviePlatforms.detail);
// 列表
router.get('/movieplatforms', controller_1.MoviePlatforms.get);
// 修改
router.put('/movieplatforms/:id', controller_1.MoviePlatforms.put);
// 批量删除
router.delete('/movieplatforms', controller_1.MoviePlatforms.del);
// 新增
router.post('/movieplatforms', controller_1.MoviePlatforms.post);
// 批量修改
router.patch('/movieplatforms', controller_1.MoviePlatforms.patch);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW92aWVQbGF0Zm9ybXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVyL01vdmllUGxhdGZvcm1zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQW9DO0FBQ3BDLDhDQUErQztBQUUvQyxNQUFNLE1BQU0sR0FBbUIsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2hELEtBQUs7QUFDTCxNQUFNLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLDJCQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDekQsS0FBSztBQUNMLE1BQU0sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsMkJBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNsRCxLQUFLO0FBQ0wsTUFBTSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSwyQkFBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3RELE9BQU87QUFDUCxNQUFNLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLDJCQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDckQsS0FBSztBQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsMkJBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNwRCxPQUFPO0FBQ1AsTUFBTSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSwyQkFBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBRXRELGtCQUFlLE1BQU0sQ0FBQyJ9