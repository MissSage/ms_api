import express = require('express');
import { RoleMenus } from '../controller';

const router: express.Router = express.Router();
// 详情
router.get('/rolemenus/:id', RoleMenus.detail);
// 列表
router.get('/rolemenus', RoleMenus.get);
// 修改
router.put('/rolemenus/:id', RoleMenus.put);
// 批量删除
router.delete('/rolemenus', RoleMenus.del);
// 新增
router.post('/rolemenus', RoleMenus.post);
// 批量修改
router.patch('/rolemenus', RoleMenus.patch);
// 批量添加
router.post('/rolemenus/addmany', RoleMenus.addMany);
export default router;
