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
const Music_1 = require("./Music");
const MovieStarrings_1 = require("./MovieStarrings");
const router = express.Router();
router.use(User_1.default);
router.use(Movie_1.default);
router.use(MovieTags_1.default);
router.use(MovieFavorite_1.default);
router.use(MovieTypes_1.default);
router.use(MoviePlatforms_1.default);
router.use(Music_1.default);
router.use(MovieStarrings_1.default);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7R0FJRztBQUNILG1DQUFvQztBQUVwQyxpQ0FBMEI7QUFFMUIsbUNBQTRCO0FBRTVCLDJDQUFvQztBQUVwQyxtREFBNEM7QUFFNUMsNkNBQXNDO0FBRXRDLHFEQUE4QztBQUU5QyxtQ0FBNEI7QUFFNUIscURBQThDO0FBRTlDLE1BQU0sTUFBTSxHQUFtQixPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFaEQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFJLENBQUMsQ0FBQztBQUNqQixNQUFNLENBQUMsR0FBRyxDQUFDLGVBQUssQ0FBQyxDQUFDO0FBQ2xCLE1BQU0sQ0FBQyxHQUFHLENBQUMsbUJBQVMsQ0FBQyxDQUFDO0FBQ3RCLE1BQU0sQ0FBQyxHQUFHLENBQUMsdUJBQWEsQ0FBQyxDQUFDO0FBQzFCLE1BQU0sQ0FBQyxHQUFHLENBQUMsb0JBQVUsQ0FBQyxDQUFDO0FBQ3ZCLE1BQU0sQ0FBQyxHQUFHLENBQUMsd0JBQWMsQ0FBQyxDQUFDO0FBQzNCLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBSyxDQUFDLENBQUM7QUFDbEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyx3QkFBYyxDQUFDLENBQUM7QUFFM0Isa0JBQWUsTUFBTSxDQUFDIn0=