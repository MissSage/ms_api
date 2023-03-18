"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieFavorite = void 0;
const mysql_1 = require("../mysql");
class MovieFavorite extends mysql_1.Base {
    constructor() {
        super({
            schema: 'ms',
            collection: 'moviefavorite',
        });
    }
}
exports.MovieFavorite = MovieFavorite;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW92aWVGYXZvcml0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYi9kb2N1bWVudC9Nb3ZpZUZhdm9yaXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG9DQUFnQztBQUVoQyxNQUFhLGFBQWMsU0FBUSxZQUFJO0lBQ3JDO1FBQ0UsS0FBSyxDQUFDO1lBQ0osTUFBTSxFQUFFLElBQUk7WUFDWixVQUFVLEVBQUUsZUFBZTtTQUM1QixDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7QUFQRCxzQ0FPQyJ9