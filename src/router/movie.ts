import express = require('express');
import { movie } from '../controller';

const router = express.Router();
router.get('/movie/:id', movie.detail);
router.put('/movie/:id', movie.put);
router.delete('/movie', movie.del);
router.get('/movie', movie.get);
router.post('/movie', movie.post);
router.patch('/movie', movie.patch);

export default router;
