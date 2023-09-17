import express = require('express');
import { Role } from '../controller';

const router: express.Router = express.Router();
// 详情
router.get('/role/:id', Role.detail);
// 列表
router.get('/role', Role.get);
// 修改
router.put('/role/:id', Role.put);
// 批量删除
router.delete('/role', Role.del);
// 新增
router.post('/role', Role.post);
// 批量修改
router.patch('/role', Role.patch);
// 批量添加
router.post('/role/addmany', Role.addMany);
export default router;
