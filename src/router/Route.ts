import express = require('express');
import { Route } from '../controller';

const router: express.Router = express.Router();
// 详情
router.get('/route/:id', Route.detail);
// 列表
router.get('/route', Route.get);
// 修改
router.put('/route/:id', Route.put);
// 批量删除
router.delete('/route', Route.del);
// 新增
router.post('/route', Route.post);
// 批量修改
router.patch('/route', Route.patch);
// 批量添加
router.post('/route/addmany', Route.addMany);
export default router;
