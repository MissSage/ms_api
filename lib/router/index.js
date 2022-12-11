"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const movie_1 = require("./movie");
const user_1 = require("./user");
const router = express.Router();
router.use(user_1.default);
router.use(movie_1.default);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQW9DO0FBQ3BDLG1DQUE0QjtBQUM1QixpQ0FBMEI7QUFDMUIsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2hDLE1BQU0sQ0FBQyxHQUFHLENBQUMsY0FBSSxDQUFDLENBQUM7QUFDakIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFLLENBQUMsQ0FBQztBQUVsQixrQkFBZSxNQUFNLENBQUMifQ==