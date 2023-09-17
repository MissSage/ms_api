import express = require('express');
import { MovieTags } from '../controller';

const router:express.Router = express.Router();
// 详情
router.get('/movietags/:id', MovieTags.detail);
// 列表
router.get('/movietags', MovieTags.get);
// 修改
router.put('/movietags/:id', MovieTags.put);
// 批量删除
router.delete('/movietags', MovieTags.del);
// 新增
router.post('/movietags', MovieTags.post);
// 批量修改
router.patch('/movietags', MovieTags.patch);
// 批量添加
router.post('/movietags/addmany', MovieTags.addMany);
export default router;
