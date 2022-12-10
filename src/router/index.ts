import express = require('express');
import movie from './movie';
import user from './user';
const router = express.Router();
router.use(user);
router.use(movie);

export default router;
