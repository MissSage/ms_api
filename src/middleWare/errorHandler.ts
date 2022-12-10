import { Response } from 'express';
import util = require('util');
const erorrHandler = () => {
  return (err, req, res: Response, next) => {
    res.status(500).json({
      error: util.format(err),
    });
  };
};
export default erorrHandler;
