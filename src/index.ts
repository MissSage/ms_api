import express = require('express');
import morgan = require('morgan');
import cors = require('cors');
import router from './router';
import errorHandler from './middleWare/errorHandler';
const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', router);
app.use(errorHandler());
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
