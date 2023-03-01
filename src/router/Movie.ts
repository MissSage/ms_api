import express = require('express');
import { Movie } from '../controller';

const router: express.Router = express.Router();
router.get('/movie/:id', Movie.detail);
router.put('/movie/:id', Movie.put);
router.delete('/movie/:id', Movie.del);
router.get('/movie', Movie.get);
router.post('/movie', Movie.post);
router.patch('/movie', Movie.patch);

export default router;
