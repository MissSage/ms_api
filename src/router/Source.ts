import express = require('express');
import { Source } from '../controller';

const router: express.Router = express.Router();
// 详情
router.get('/source/:id', Source.detail);
// 列表
router.get('/source', Source.get);
// 修改
router.put('/source/:id', Source.put);
// 批量删除
router.delete('/source', Source.del);
// 新增
router.post('/source', Source.post);
// 批量修改
router.patch('/source', Source.patch);
// 批量添加
router.post('/source/addmany', Source.addMany);
export default router;
