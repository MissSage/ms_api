"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieTags = void 0;
const mysql_1 = require("../../utils/mysql");
class MovieTags extends mysql_1.Base {
    constructor() {
        super({
            schema: 'ms',
            collection: 'movietags',
        });
    }
}
exports.MovieTags = MovieTags;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW92aWVUYWdzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2RiL2RvY3VtZW50L01vdmllVGFncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2Q0FBeUM7QUFFekMsTUFBYSxTQUFVLFNBQVEsWUFBSTtJQUNqQztRQUNFLEtBQUssQ0FBQztZQUNKLE1BQU0sRUFBRSxJQUFJO1lBQ1osVUFBVSxFQUFFLFdBQVc7U0FDeEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGO0FBUEQsOEJBT0MifQ==