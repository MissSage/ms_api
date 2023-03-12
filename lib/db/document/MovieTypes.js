"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieTypes = void 0;
const mysql_1 = require("../mysql");
class MovieTypes extends mysql_1.Base {
    constructor() {
        super({
            schema: 'ms',
            collection: 'movietypes',
        });
    }
}
exports.MovieTypes = MovieTypes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW92aWVUeXBlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYi9kb2N1bWVudC9Nb3ZpZVR5cGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG9DQUFnQztBQUVoQyxNQUFhLFVBQVcsU0FBUSxZQUFJO0lBQ2xDO1FBQ0UsS0FBSyxDQUFDO1lBQ0osTUFBTSxFQUFFLElBQUk7WUFDWixVQUFVLEVBQUUsWUFBWTtTQUN6QixDQUFDLENBQUM7SUFDTCxDQUFDO0NBRUY7QUFSRCxnQ0FRQyJ9