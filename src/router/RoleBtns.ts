import express = require('express');
import { RoleBtns } from '../controller';

const router:express.Router = express.Router();
// 详情
router.get('/rolebtns/:id', RoleBtns.detail);
// 列表
router.get('/rolebtns', RoleBtns.get);
// 修改
router.put('/rolebtns/:id', RoleBtns.put);
// 批量删除
router.delete('/rolebtns', RoleBtns.del);
// 新增
router.post('/rolebtns', RoleBtns.post);
// 批量修改
router.patch('/rolebtns', RoleBtns.patch);
// 批量添加
router.post('/rolebtns/addmany', RoleBtns.addMany);
export default router;
