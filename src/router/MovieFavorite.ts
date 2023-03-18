import express = require('express');
import { MovieFavorite } from '../controller';

const router: express.Router = express.Router();
router.get('/moviefavorite/:id', MovieFavorite.detail);
router.put('/moviefavorite/:id', MovieFavorite.put);
router.delete('/moviefavorite/:id', MovieFavorite.del);
router.get('/moviefavorite', MovieFavorite.get);
router.post('/moviefavorite', MovieFavorite.post);
router.patch('/moviefavorite', MovieFavorite.patch);
router.post('/moviefavorite/toggle', MovieFavorite.toggle);
export default router;
