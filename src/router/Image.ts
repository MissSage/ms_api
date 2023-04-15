import express = require('express');
import { Image } from '../controller';

const router: express.Router = express.Router();
// 详情
router.get('/image/:id', Image.detail);
// 列表
router.get('/image', Image.get);
// 修改
router.put('/image/:id', Image.put);
// 批量删除
router.delete('/image', Image.del);
// 新增
router.post('/image', Image.post);
// 批量修改
router.patch('/image', Image.patch);
// 批量导入
router.post('/image/import', Image.Import);

export default router;
