import express = require('express');
import { MovieFavorite } from '../controller';

const router:express.Router = express.Router();
// 详情
router.get('/moviefavorite/:id', MovieFavorite.detail);
// 列表
router.get('/moviefavorite', MovieFavorite.get);
// 修改
router.put('/moviefavorite/:id', MovieFavorite.put);
// 批量删除
router.delete('/moviefavorite', MovieFavorite.del);
// 新增
router.post('/moviefavorite', MovieFavorite.post);
// 批量修改
router.patch('/moviefavorite', MovieFavorite.patch);
// 批量添加
router.post('/moviefavorite/addmany', MovieFavorite.addMany);
export default router;
