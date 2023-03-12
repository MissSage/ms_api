import express = require('express');
import { MovieTypes } from '../controller';

const router: express.Router = express.Router();
// 详情
router.get('/movietypes/:id', MovieTypes.detail);
// 列表
router.get('/movietypes', MovieTypes.get);
// 修改
router.put('/movietypes/:id', MovieTypes.put);
// 批量删除
router.delete('/movietypes', MovieTypes.del);
// 新增
router.post('/movietypes', MovieTypes.post);
// 批量修改
router.patch('/movietypes', MovieTypes.patch);

export default router;
