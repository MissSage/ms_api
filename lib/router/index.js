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
const router = express.Router();
router.use(User_1.default);
router.use(Movie_1.default);
router.use(MovieTags_1.default);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7R0FJRztBQUNILG1DQUFvQztBQUVwQyxpQ0FBMEI7QUFFMUIsbUNBQTRCO0FBRTVCLDJDQUFvQztBQUVwQyxNQUFNLE1BQU0sR0FBbUIsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRWhELE1BQU0sQ0FBQyxHQUFHLENBQUMsY0FBSSxDQUFDLENBQUM7QUFDakIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFLLENBQUMsQ0FBQztBQUNsQixNQUFNLENBQUMsR0FBRyxDQUFDLG1CQUFTLENBQUMsQ0FBQztBQUV0QixrQkFBZSxNQUFNLENBQUMifQ==