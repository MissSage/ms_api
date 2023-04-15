"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * !--------- WARNING ----------!
 *
 * 自动生成，请勿手动修改
 */
const express = require("express");
const User_1 = require("./User");
const Movie_1 = require("./Movie");
const MovieTags_1 = require("./MovieTags");
const MovieFavorite_1 = require("./MovieFavorite");
const MovieTypes_1 = require("./MovieTypes");
const MoviePlatforms_1 = require("./MoviePlatforms");
const MovieStarrings_1 = require("./MovieStarrings");
const Music_1 = require("./Music");
const MusicFavorite_1 = require("./MusicFavorite");
const Image_1 = require("./Image");
const router = express.Router();
router.use(User_1.default);
router.use(Movie_1.default);
router.use(MovieTags_1.default);
router.use(MovieFavorite_1.default);
router.use(MovieTypes_1.default);
router.use(MoviePlatforms_1.default);
router.use(MovieStarrings_1.default);
router.use(Music_1.default);
router.use(MusicFavorite_1.default);
router.use(Image_1.default);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7R0FJRztBQUNILG1DQUFvQztBQUVwQyxpQ0FBMEI7QUFFMUIsbUNBQTRCO0FBRTVCLDJDQUFvQztBQUVwQyxtREFBNEM7QUFFNUMsNkNBQXNDO0FBRXRDLHFEQUE4QztBQUU5QyxxREFBOEM7QUFFOUMsbUNBQTRCO0FBRTVCLG1EQUE0QztBQUU1QyxtQ0FBNEI7QUFFNUIsTUFBTSxNQUFNLEdBQW1CLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVoRCxNQUFNLENBQUMsR0FBRyxDQUFDLGNBQUksQ0FBQyxDQUFDO0FBQ2pCLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBSyxDQUFDLENBQUM7QUFDbEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxtQkFBUyxDQUFDLENBQUM7QUFDdEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyx1QkFBYSxDQUFDLENBQUM7QUFDMUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxvQkFBVSxDQUFDLENBQUM7QUFDdkIsTUFBTSxDQUFDLEdBQUcsQ0FBQyx3QkFBYyxDQUFDLENBQUM7QUFDM0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyx3QkFBYyxDQUFDLENBQUM7QUFDM0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFLLENBQUMsQ0FBQztBQUNsQixNQUFNLENBQUMsR0FBRyxDQUFDLHVCQUFhLENBQUMsQ0FBQztBQUMxQixNQUFNLENBQUMsR0FBRyxDQUFDLGVBQUssQ0FBQyxDQUFDO0FBRWxCLGtCQUFlLE1BQU0sQ0FBQyJ9