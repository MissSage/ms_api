"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Music = void 0;
const mysql_1 = require("../mysql");
class Music extends mysql_1.Base {
    constructor() {
        super({
            schema: 'ms',
            collection: 'music',
        });
    }
}
exports.Music = Music;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXVzaWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGIvZG9jdW1lbnQvTXVzaWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsb0NBQWdDO0FBRWhDLE1BQWEsS0FBTSxTQUFRLFlBQUk7SUFDN0I7UUFDRSxLQUFLLENBQUM7WUFDSixNQUFNLEVBQUUsSUFBSTtZQUNaLFVBQVUsRUFBRSxPQUFPO1NBQ3BCLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FFRjtBQVJELHNCQVFDIn0=