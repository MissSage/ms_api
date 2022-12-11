"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patch = exports.detail = exports.get = exports.del = exports.put = exports.post = void 0;
const post = async (req, res, next) => {
    try {
        console.log(req.body);
        res.send('post');
    }
    catch (error) {
        next(error);
    }
};
exports.post = post;
const put = async (req, res, next) => {
    try {
        res.send('put');
    }
    catch (error) {
        next(error);
    }
};
exports.put = put;
const del = async (req, res, next) => {
    try {
        res.send('del');
    }
    catch (error) {
        next(error);
    }
};
exports.del = del;
const get = async (req, res, next) => {
    try {
        res.send('get');
    }
    catch (error) {
        next(error);
    }
};
exports.get = get;
const detail = async (req, res, next) => {
    try {
        res.send('detail');
    }
    catch (error) {
        next(error);
    }
};
exports.detail = detail;
const patch = async (req, res, next) => {
    try {
        res.send('patch');
    }
    catch (error) {
        next(error);
    }
};
exports.patch = patch;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW92aWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udHJvbGxlci9tb3ZpZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDTyxNQUFNLElBQUksR0FBRyxLQUFLLEVBQUUsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQixFQUFFLEVBQUU7SUFDNUUsSUFBSTtRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXRCLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDbEI7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNiO0FBQ0gsQ0FBQyxDQUFDO0FBUlcsUUFBQSxJQUFJLFFBUWY7QUFDSyxNQUFNLEdBQUcsR0FBRyxLQUFLLEVBQUUsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQixFQUFFLEVBQUU7SUFDM0UsSUFBSTtRQUNGLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDakI7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNiO0FBQ0gsQ0FBQyxDQUFDO0FBTlcsUUFBQSxHQUFHLE9BTWQ7QUFDSyxNQUFNLEdBQUcsR0FBRyxLQUFLLEVBQUUsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQixFQUFFLEVBQUU7SUFDM0UsSUFBSTtRQUNGLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDakI7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNiO0FBQ0gsQ0FBQyxDQUFDO0FBTlcsUUFBQSxHQUFHLE9BTWQ7QUFDSyxNQUFNLEdBQUcsR0FBRyxLQUFLLEVBQUUsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQixFQUFFLEVBQUU7SUFDM0UsSUFBSTtRQUNGLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDakI7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNiO0FBQ0gsQ0FBQyxDQUFDO0FBTlcsUUFBQSxHQUFHLE9BTWQ7QUFDSyxNQUFNLE1BQU0sR0FBRyxLQUFLLEVBQ3pCLEdBQVksRUFDWixHQUFhLEVBQ2IsSUFBa0IsRUFDbEIsRUFBRTtJQUNGLElBQUk7UUFDRixHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ3BCO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDYjtBQUNILENBQUMsQ0FBQztBQVZXLFFBQUEsTUFBTSxVQVVqQjtBQUNLLE1BQU0sS0FBSyxHQUFHLEtBQUssRUFDdEIsR0FBWSxFQUNaLEdBQWEsRUFDYixJQUFrQixFQUNsQixFQUFFO0lBQ0YsSUFBSTtRQUNGLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDbkI7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNiO0FBQ0gsQ0FBQyxDQUFDO0FBVlMsUUFBQSxLQUFLLFNBVWQifQ==