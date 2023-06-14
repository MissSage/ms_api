import express = require('express');
import { MovieDirects } from '../controller';

const router: express.Router = express.Router();
// 详情
router.get('/moviedirects/:id', MovieDirects.detail);
// 列表
router.get('/moviedirects', MovieDirects.get);
// 修改
router.put('/moviedirects/:id', MovieDirects.put);
// 批量删除
router.delete('/moviedirects', MovieDirects.del);
// 新增
router.post('/moviedirects', MovieDirects.post);
// 批量修改
router.patch('/moviedirects', MovieDirects.patch);
// 批量添加
router.post('/moviedirects/addmany', MovieDirects.addMany);
export default router;
