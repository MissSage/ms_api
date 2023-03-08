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
const Favorite_1 = require("./Favorite");
const router = express.Router();
router.use(User_1.default);
router.use(Movie_1.default);
router.use(MovieTags_1.default);
router.use(Favorite_1.default);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7R0FJRztBQUNILG1DQUFvQztBQUVwQyxpQ0FBMEI7QUFFMUIsbUNBQTRCO0FBRTVCLDJDQUFvQztBQUVwQyx5Q0FBa0M7QUFFbEMsTUFBTSxNQUFNLEdBQW1CLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVoRCxNQUFNLENBQUMsR0FBRyxDQUFDLGNBQUksQ0FBQyxDQUFDO0FBQ2pCLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBSyxDQUFDLENBQUM7QUFDbEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxtQkFBUyxDQUFDLENBQUM7QUFDdEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxrQkFBUSxDQUFDLENBQUM7QUFFckIsa0JBQWUsTUFBTSxDQUFDIn0=