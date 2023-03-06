"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const controller_1 = require("../controller");
const router = express.Router();
router.get('/movietags/:id', controller_1.MovieTags.detail);
router.put('/movietags/:id', controller_1.MovieTags.put);
router.delete('/movietags/:id', controller_1.MovieTags.del);
router.get('/movietags', controller_1.MovieTags.get);
router.post('/movietags', controller_1.MovieTags.post);
router.patch('/movietags', controller_1.MovieTags.patch);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW92aWVUYWdzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JvdXRlci9Nb3ZpZVRhZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBb0M7QUFDcEMsOENBQTBDO0FBRTFDLE1BQU0sTUFBTSxHQUFtQixPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDaEQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxzQkFBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQy9DLE1BQU0sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsc0JBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM1QyxNQUFNLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUFFLHNCQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDL0MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsc0JBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN4QyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxzQkFBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLHNCQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7QUFFNUMsa0JBQWUsTUFBTSxDQUFDIn0=