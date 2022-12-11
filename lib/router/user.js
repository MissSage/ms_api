"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const index_1 = require("../controller/index");
const router = express.Router();
router.post('/user/login', index_1.user.login);
router.post('/user', index_1.user.post);
router.get('/user/:id', index_1.user.detail);
router.get('/user', index_1.user.get);
router.delete('/user', index_1.user.del);
router.put('/user/:id', index_1.user.put);
router.patch('/user', index_1.user.patch);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXIvdXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUFvQztBQUNwQywrQ0FBMkM7QUFFM0MsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLFlBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN2QyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxZQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDaEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsWUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3JDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFlBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM5QixNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxZQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDakMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsWUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2xDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFlBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUVsQyxrQkFBZSxNQUFNLENBQUMifQ==