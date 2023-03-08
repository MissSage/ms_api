"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const controller_1 = require("../controller");
const router = express.Router();
router.get('/movie/:id', controller_1.Movie.detail);
router.put('/movie/:id', controller_1.Movie.put);
router.delete('/movie', controller_1.Movie.del);
router.get('/movie', controller_1.Movie.get);
router.post('/movie', controller_1.Movie.post);
router.patch('/movie', controller_1.Movie.patch);
router.post('/movie/import', controller_1.Movie.Import);
router.post('/movie/imgs/:id', controller_1.Movie.postImage);
router.get('/movies/favour', controller_1.Movie.favours);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW92aWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVyL01vdmllLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQW9DO0FBQ3BDLDhDQUFzQztBQUV0QyxNQUFNLE1BQU0sR0FBbUIsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2hELE1BQU0sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLGtCQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdkMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsa0JBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNwQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxrQkFBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ25DLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLGtCQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDaEMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsa0JBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNsQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxrQkFBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLGtCQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDM0MsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxrQkFBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ2hELE1BQU0sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsa0JBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM1QyxrQkFBZSxNQUFNLENBQUMifQ==