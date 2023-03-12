/**
 * !--------- WARNING ----------!
 *
 * 自动生成，请勿手动修改
 */
import express = require('express');

import User from './User';

import Movie from './Movie';

import MovieTags from './MovieTags';

import Favorite from './Favorite';

import MovieTypes from './MovieTypes';

import MoviePlatforms from './MoviePlatforms';

const router: express.Router = express.Router();

router.use(User);
router.use(Movie);
router.use(MovieTags);
router.use(Favorite);
router.use(MovieTypes);
router.use(MoviePlatforms);

export default router;
