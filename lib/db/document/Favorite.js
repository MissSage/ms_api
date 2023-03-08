"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Favorite = void 0;
const mysql_1 = require("../mysql");
class Favorite extends mysql_1.Base {
    constructor() {
        super({
            schema: 'ms',
            collection: 'favorite',
        });
    }
}
exports.Favorite = Favorite;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmF2b3JpdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGIvZG9jdW1lbnQvRmF2b3JpdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsb0NBQWdDO0FBRWhDLE1BQWEsUUFBUyxTQUFRLFlBQUk7SUFDaEM7UUFDRSxLQUFLLENBQUM7WUFDSixNQUFNLEVBQUUsSUFBSTtZQUNaLFVBQVUsRUFBRSxVQUFVO1NBQ3ZCLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjtBQVBELDRCQU9DIn0=