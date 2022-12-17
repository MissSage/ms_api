import express = require('express');
import { {{apiName}} } from '../controller';

const router = express.Router();
router.get('/{{collectionName}}/:id', {{apiName}}.detail);
router.put('/{{collectionName}}/:id', {{apiName}}.put);
router.delete('/{{collectionName}}/:id', {{apiName}}.del);
router.get('/{{collectionName}}', {{apiName}}.get);
router.post('/{{collectionName}}', {{apiName}}.post);
router.patch('/{{collectionName}}', {{apiName}}.patch);

export default router;
