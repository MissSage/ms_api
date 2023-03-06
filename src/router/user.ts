import express = require('express');
import { User } from '../controller';

const router: express.Router = express.Router();
router.get('/user/:id', User.detail);
router.put('/user/:id', User.put);
router.delete('/user/:id', User.del);
router.get('/user', User.get);
router.post('/user', User.post);
router.patch('/user', User.patch);

export default router;
