import express = require('express');
import { {{apiName}} } from '../controller';

const router: express.Router = express.Router();
// 详情
router.get('/{{collectionName}}/:id', {{apiName}}.detail);
// 列表
router.get('/{{collectionName}}', {{apiName}}.get);
// 修改
router.put('/{{collectionName}}/:id', {{apiName}}.put);
// 批量删除
router.delete('/{{collectionName}}', {{apiName}}.del);
// 新增
router.post('/{{collectionName}}', {{apiName}}.post);
// 批量修改
router.patch('/{{collectionName}}', {{apiName}}.patch);
// 批量添加
router.post('/{{collectionName}}/addmany', {{apiName}}.addMany);
export default router;
