"use strict";
/**
 * !--------- WARNING ----------!
 *
 * 自动生成，请勿手动修改
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = exports.MusicFavorite = exports.Music = exports.MovieStarrings = exports.MoviePlatforms = exports.MovieTypes = exports.MovieFavorite = exports.MovieTags = exports.Movie = exports.User = void 0;
var User_1 = require("./document/User");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return User_1.User; } });
var Movie_1 = require("./document/Movie");
Object.defineProperty(exports, "Movie", { enumerable: true, get: function () { return Movie_1.Movie; } });
var MovieTags_1 = require("./document/MovieTags");
Object.defineProperty(exports, "MovieTags", { enumerable: true, get: function () { return MovieTags_1.MovieTags; } });
var MovieFavorite_1 = require("./document/MovieFavorite");
Object.defineProperty(exports, "MovieFavorite", { enumerable: true, get: function () { return MovieFavorite_1.MovieFavorite; } });
var MovieTypes_1 = require("./document/MovieTypes");
Object.defineProperty(exports, "MovieTypes", { enumerable: true, get: function () { return MovieTypes_1.MovieTypes; } });
var MoviePlatforms_1 = require("./document/MoviePlatforms");
Object.defineProperty(exports, "MoviePlatforms", { enumerable: true, get: function () { return MoviePlatforms_1.MoviePlatforms; } });
var MovieStarrings_1 = require("./document/MovieStarrings");
Object.defineProperty(exports, "MovieStarrings", { enumerable: true, get: function () { return MovieStarrings_1.MovieStarrings; } });
var Music_1 = require("./document/Music");
Object.defineProperty(exports, "Music", { enumerable: true, get: function () { return Music_1.Music; } });
var MusicFavorite_1 = require("./document/MusicFavorite");
Object.defineProperty(exports, "MusicFavorite", { enumerable: true, get: function () { return MusicFavorite_1.MusicFavorite; } });
var Image_1 = require("./document/Image");
Object.defineProperty(exports, "Image", { enumerable: true, get: function () { return Image_1.Image; } });
__exportStar(require("./mysql"), exports);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7O0dBSUc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUgsd0NBQXVDO0FBQTlCLDRGQUFBLElBQUksT0FBQTtBQUViLDBDQUF5QztBQUFoQyw4RkFBQSxLQUFLLE9BQUE7QUFFZCxrREFBaUQ7QUFBeEMsc0dBQUEsU0FBUyxPQUFBO0FBRWxCLDBEQUF5RDtBQUFoRCw4R0FBQSxhQUFhLE9BQUE7QUFFdEIsb0RBQW1EO0FBQTFDLHdHQUFBLFVBQVUsT0FBQTtBQUVuQiw0REFBMkQ7QUFBbEQsZ0hBQUEsY0FBYyxPQUFBO0FBRXZCLDREQUEyRDtBQUFsRCxnSEFBQSxjQUFjLE9BQUE7QUFFdkIsMENBQXlDO0FBQWhDLDhGQUFBLEtBQUssT0FBQTtBQUVkLDBEQUF5RDtBQUFoRCw4R0FBQSxhQUFhLE9BQUE7QUFFdEIsMENBQXlDO0FBQWhDLDhGQUFBLEtBQUssT0FBQTtBQUVkLDBDQUF3QiJ9