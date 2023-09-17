import express = require('express');
import { MusicFavorite } from '../controller';

const router: express.Router = express.Router();
// 详情
router.get('/musicfavorite/:id', MusicFavorite.detail);
// 列表
router.get('/musicfavorite', MusicFavorite.get);
// 修改
router.put('/musicfavorite/:id', MusicFavorite.put);
// 批量删除
router.delete('/musicfavorite', MusicFavorite.del);
// 新增
router.post('/musicfavorite', MusicFavorite.post);
// 批量修改
router.patch('/musicfavorite', MusicFavorite.patch);
// 批量添加
router.post('/musicfavorite/addmany', MusicFavorite.addMany);
export default router;
