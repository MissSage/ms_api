"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieStarrings = void 0;
const mysql_1 = require("../mysql");
class MovieStarrings extends mysql_1.Base {
    constructor() {
        super({
            schema: 'ms',
            collection: 'moviestarrings',
        });
    }
}
exports.MovieStarrings = MovieStarrings;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW92aWVTdGFycmluZ3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGIvZG9jdW1lbnQvTW92aWVTdGFycmluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsb0NBQWdDO0FBRWhDLE1BQWEsY0FBZSxTQUFRLFlBQUk7SUFDdEM7UUFDRSxLQUFLLENBQUM7WUFDSixNQUFNLEVBQUUsSUFBSTtZQUNaLFVBQVUsRUFBRSxnQkFBZ0I7U0FDN0IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUVGO0FBUkQsd0NBUUMifQ==