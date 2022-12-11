"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const controller_1 = require("../controller");
const router = express.Router();
router.get('/movie/:id', controller_1.movie.detail);
router.put('/movie/:id', controller_1.movie.put);
router.delete('/movie', controller_1.movie.del);
router.get('/movie', controller_1.movie.get);
router.post('/movie', controller_1.movie.post);
router.patch('/movie', controller_1.movie.patch);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW92aWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVyL21vdmllLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQW9DO0FBQ3BDLDhDQUFzQztBQUV0QyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDaEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsa0JBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN2QyxNQUFNLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxrQkFBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLGtCQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbkMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsa0JBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxrQkFBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2xDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLGtCQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7QUFFcEMsa0JBQWUsTUFBTSxDQUFDIn0=