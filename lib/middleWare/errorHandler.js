"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util = require("util");
const erorrHandler = () => {
    return (err, req, res, next) => {
        res.status(500).json({
            error: util.format(err),
        });
    };
};
exports.default = erorrHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JIYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21pZGRsZVdhcmUvZXJyb3JIYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsNkJBQThCO0FBQzlCLE1BQU0sWUFBWSxHQUFHLEdBQUcsRUFBRTtJQUN4QixPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFhLEVBQUUsSUFBSSxFQUFFLEVBQUU7UUFDdkMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDbkIsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1NBQ3hCLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUNGLGtCQUFlLFlBQVksQ0FBQyJ9