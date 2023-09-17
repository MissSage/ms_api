import express = require('express');
import { User } from '../controller';

const router:express.Router = express.Router();
// 详情
router.get('/user/:id', User.detail);
// 列表
router.get('/user', User.get);
// 修改
router.put('/user/:id', User.put);
// 批量删除
router.delete('/user', User.del);
// 新增
router.post('/user', User.post);
// 批量修改
router.patch('/user', User.patch);
// 批量添加
router.post('/user/addmany', User.addMany);
export default router;
