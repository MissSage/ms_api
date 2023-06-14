"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieDirects = void 0;
const mysql_1 = require("../mysql");
class MovieDirects extends mysql_1.Base {
    constructor() {
        super({
            schema: 'ms',
            collection: 'moviedirects',
        });
    }
}
exports.MovieDirects = MovieDirects;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW92aWVEaXJlY3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2RiL2RvY3VtZW50L01vdmllRGlyZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxvQ0FBZ0M7QUFFaEMsTUFBYSxZQUFhLFNBQVEsWUFBSTtJQUNwQztRQUNFLEtBQUssQ0FBQztZQUNKLE1BQU0sRUFBRSxJQUFJO1lBQ1osVUFBVSxFQUFFLGNBQWM7U0FDM0IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUVGO0FBUkQsb0NBUUMifQ==