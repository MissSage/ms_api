"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mysql_1 = require("../../utils/mysql");
class User extends mysql_1.Base {
    constructor() {
        super({
            schema: 'ms',
            collection: 'user',
        });
    }
    testProp;
}
exports.User = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYi9kb2N1bWVudC9Vc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZDQUF5QztBQUV6QyxNQUFhLElBQUssU0FBUSxZQUFJO0lBQzVCO1FBQ0UsS0FBSyxDQUFDO1lBQ0osTUFBTSxFQUFFLElBQUk7WUFDWixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsUUFBUSxDQUFlO0NBQ3hCO0FBUkQsb0JBUUMifQ==