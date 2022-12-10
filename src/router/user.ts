import express = require('express');
import { user } from '../controller/index';

const router = express.Router();
router.post('/user/login', user.login);
router.post('/user', user.post);
router.get('/user/:id', user.detail);
router.get('/user', user.get);
router.delete('/user', user.del);
router.put('/user/:id', user.put);
router.patch('/user', user.patch);

export default router;
