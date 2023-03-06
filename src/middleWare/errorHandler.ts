import { Response } from 'express';
import util = require('util');
const erorrHandler = () => {
  return (err, req, res: Response, next) => {
    console.log(next);
    const e = util.format(err);
    console.log(e);
    res.status(500).json({
      error: e,
    });
  };
};
export default erorrHandler;
