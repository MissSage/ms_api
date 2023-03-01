import express = require('express');
import { MovieTags } from '../controller';

const router:express.Router = express.Router();
router.get('/movietags/:id', MovieTags.detail);
router.put('/movietags/:id', MovieTags.put);
router.delete('/movietags/:id', MovieTags.del);
router.get('/movietags', MovieTags.get);
router.post('/movietags', MovieTags.post);
router.patch('/movietags', MovieTags.patch);

export default router;
