"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
const mysql_1 = require("../mysql");
class Movie extends mysql_1.Base {
    constructor() {
        super({
            schema: 'ms',
            collection: 'movie',
        });
    }
}
exports.Movie = Movie;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW92aWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGIvZG9jdW1lbnQvTW92aWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsb0NBQWdDO0FBRWhDLE1BQWEsS0FBTSxTQUFRLFlBQUk7SUFDN0I7UUFDRSxLQUFLLENBQUM7WUFDSixNQUFNLEVBQUUsSUFBSTtZQUNaLFVBQVUsRUFBRSxPQUFPO1NBQ3BCLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjtBQVBELHNCQU9DIn0=