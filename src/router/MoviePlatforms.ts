import express = require('express');
import { MoviePlatforms } from '../controller';

const router: express.Router = express.Router();
// 详情
router.get('/movieplatforms/:id', MoviePlatforms.detail);
// 列表
router.get('/movieplatforms', MoviePlatforms.get);
// 修改
router.put('/movieplatforms/:id', MoviePlatforms.put);
// 批量删除
router.delete('/movieplatforms', MoviePlatforms.del);
// 新增
router.post('/movieplatforms', MoviePlatforms.post);
// 批量修改
router.patch('/movieplatforms', MoviePlatforms.patch);
// 批量添加
router.post('/movieplatforms/addmany', MoviePlatforms.addMany);
export default router;
