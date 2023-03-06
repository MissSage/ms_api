"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const controller_1 = require("../controller");
const router = express.Router();
router.get('/user/:id', controller_1.User.detail);
router.put('/user/:id', controller_1.User.put);
router.delete('/user/:id', controller_1.User.del);
router.get('/user', controller_1.User.get);
router.post('/user', controller_1.User.post);
router.patch('/user', controller_1.User.patch);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXIvVXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUFvQztBQUNwQyw4Q0FBcUM7QUFFckMsTUFBTSxNQUFNLEdBQW1CLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNoRCxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxpQkFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3JDLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLGlCQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsaUJBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNyQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxpQkFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLGlCQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDaEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsaUJBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUVsQyxrQkFBZSxNQUFNLENBQUMifQ==