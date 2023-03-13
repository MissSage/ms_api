import express = require('express');
import { MovieStarrings } from '../controller';

const router: express.Router = express.Router();
// 详情
router.get('/moviestarrings/:id', MovieStarrings.detail);
// 列表
router.get('/moviestarrings', MovieStarrings.get);
// 修改
router.put('/moviestarrings/:id', MovieStarrings.put);
// 批量删除
router.delete('/moviestarrings', MovieStarrings.del);
// 新增
router.post('/moviestarrings', MovieStarrings.post);
// 批量修改
router.patch('/moviestarrings', MovieStarrings.patch);

export default router;
