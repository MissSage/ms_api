/**
 * !--------- WARNING ----------!
 *
 * 自动生成，请勿手动修改
 */
import express = require('express');

import User from './User';

import Movie from './Movie';

import MovieTags from './MovieTags';

import MovieFavorite from './MovieFavorite';

import MovieTypes from './MovieTypes';

import MoviePlatforms from './MoviePlatforms';

import MovieStarrings from './MovieStarrings';

import Music from './Music';

import MusicFavorite from './MusicFavorite';

import Image from './Image';

const router: express.Router = express.Router();

router.use(User);
router.use(Movie);
router.use(MovieTags);
router.use(MovieFavorite);
router.use(MovieTypes);
router.use(MoviePlatforms);
router.use(MovieStarrings);
router.use(Music);
router.use(MusicFavorite);
router.use(Image);

export default router;
