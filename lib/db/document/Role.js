"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
const mysql_1 = require("../mysql");
class Role extends mysql_1.Base {
    constructor() {
        super({
            schema: 'ms',
            collection: 'role',
        });
    }
}
exports.Role = Role;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm9sZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYi9kb2N1bWVudC9Sb2xlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG9DQUFnQztBQUVoQyxNQUFhLElBQUssU0FBUSxZQUFJO0lBQzVCO1FBQ0UsS0FBSyxDQUFDO1lBQ0osTUFBTSxFQUFFLElBQUk7WUFDWixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDLENBQUM7SUFDTCxDQUFDO0NBRUY7QUFSRCxvQkFRQyJ9