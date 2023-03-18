"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MusicFavorite = void 0;
const mysql_1 = require("../mysql");
class MusicFavorite extends mysql_1.Base {
    constructor() {
        super({
            schema: 'ms',
            collection: 'musicfavorite',
        });
    }
}
exports.MusicFavorite = MusicFavorite;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXVzaWNGYXZvcml0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYi9kb2N1bWVudC9NdXNpY0Zhdm9yaXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG9DQUFnQztBQUVoQyxNQUFhLGFBQWMsU0FBUSxZQUFJO0lBQ3JDO1FBQ0UsS0FBSyxDQUFDO1lBQ0osTUFBTSxFQUFFLElBQUk7WUFDWixVQUFVLEVBQUUsZUFBZTtTQUM1QixDQUFDLENBQUM7SUFDTCxDQUFDO0NBRUY7QUFSRCxzQ0FRQyJ9