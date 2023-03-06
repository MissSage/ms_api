"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util = require("util");
const erorrHandler = () => {
    return (err, req, res, next) => {
        console.log(next);
        const e = util.format(err);
        console.log(e);
        res.status(500).json({
            error: e,
        });
    };
};
exports.default = erorrHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JIYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21pZGRsZVdhcmUvZXJyb3JIYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsNkJBQThCO0FBQzlCLE1BQU0sWUFBWSxHQUFHLEdBQUcsRUFBRTtJQUN4QixPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFhLEVBQUUsSUFBSSxFQUFFLEVBQUU7UUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNuQixLQUFLLEVBQUUsQ0FBQztTQUNULENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUNGLGtCQUFlLFlBQVksQ0FBQyJ9