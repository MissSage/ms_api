import express = require('express');
import { Menu } from '../controller';

const router:express.Router = express.Router();
// 详情
router.get('/menu/:id', Menu.detail);
// 列表
router.get('/menu', Menu.get);
// 修改
router.put('/menu/:id', Menu.put);
// 批量删除
router.delete('/menu', Menu.del);
// 新增
router.post('/menu', Menu.post);
// 批量修改
router.patch('/menu', Menu.patch);
// 批量添加
router.post('/menu/addmany', Menu.addMany);
export default router;
