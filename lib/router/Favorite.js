"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const controller_1 = require("../controller");
const router = express.Router();
router.get('/favorite/:id', controller_1.Favorite.detail);
router.put('/favorite/:id', controller_1.Favorite.put);
router.delete('/favorite/:id', controller_1.Favorite.del);
router.get('/favorite', controller_1.Favorite.get);
router.post('/favorite', controller_1.Favorite.post);
router.patch('/favorite', controller_1.Favorite.patch);
router.post('/favorite/toggle', controller_1.Favorite.toggle);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmF2b3JpdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVyL0Zhdm9yaXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQW9DO0FBQ3BDLDhDQUF5QztBQUV6QyxNQUFNLE1BQU0sR0FBbUIsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2hELE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLHFCQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDN0MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUscUJBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMxQyxNQUFNLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxxQkFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzdDLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLHFCQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDdEMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUscUJBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN4QyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxxQkFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUscUJBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNqRCxrQkFBZSxNQUFNLENBQUMifQ==