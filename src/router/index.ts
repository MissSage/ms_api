/**
 * !--------- WARNING ----------!
 *
 * 自动生成，请勿手动修改
 */
import express = require('express');

import User from './User';

import Movie from './Movie';

import MovieTags from './MovieTags';

const router: express.Router = express.Router();

router.use(User);
router.use(Movie);
router.use(MovieTags);

export default router;
