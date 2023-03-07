import express = require('express');
import { Favorite } from '../controller';

const router:express.Router = express.Router();
router.get('/favorite/:id', Favorite.detail);
router.put('/favorite/:id', Favorite.put);
router.delete('/favorite/:id', Favorite.del);
router.get('/favorite', Favorite.get);
router.post('/favorite', Favorite.post);
router.patch('/favorite', Favorite.patch);

export default router;
