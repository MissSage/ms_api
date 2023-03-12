import express = require('express');
import { Music } from '../controller';

const router: express.Router = express.Router();
// 详情
router.get('/music/:id', Music.detail);
// 列表
router.get('/music', Music.get);
// 修改
router.put('/music/:id', Music.put);
// 批量删除
router.delete('/music', Music.del);
// 新增
router.post('/music', Music.post);
// 批量修改
router.patch('/music', Music.patch);
// 批量上传
router.post('/music/import', Music.Import);

export default router;
