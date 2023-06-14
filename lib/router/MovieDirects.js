"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const controller_1 = require("../controller");
const router = express.Router();
// 详情
router.get('/moviedirects/:id', controller_1.MovieDirects.detail);
// 列表
router.get('/moviedirects', controller_1.MovieDirects.get);
// 修改
router.put('/moviedirects/:id', controller_1.MovieDirects.put);
// 批量删除
router.delete('/moviedirects', controller_1.MovieDirects.del);
// 新增
router.post('/moviedirects', controller_1.MovieDirects.post);
// 批量修改
router.patch('/moviedirects', controller_1.MovieDirects.patch);
// 批量添加
router.post('/moviedirects/addmany', controller_1.MovieDirects.addMany);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW92aWVEaXJlY3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JvdXRlci9Nb3ZpZURpcmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBb0M7QUFDcEMsOENBQTZDO0FBRTdDLE1BQU0sTUFBTSxHQUFtQixPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDaEQsS0FBSztBQUNMLE1BQU0sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUseUJBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNyRCxLQUFLO0FBQ0wsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUseUJBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM5QyxLQUFLO0FBQ0wsTUFBTSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSx5QkFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2xELE9BQU87QUFDUCxNQUFNLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSx5QkFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2pELEtBQUs7QUFDTCxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSx5QkFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2hELE9BQU87QUFDUCxNQUFNLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRSx5QkFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2xELE9BQU87QUFDUCxNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLHlCQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDM0Qsa0JBQWUsTUFBTSxDQUFDIn0=