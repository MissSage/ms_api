import express = require('express');
import morgan = require('morgan');
import cors = require('cors');
import router from './router';
import errorHandler from './middleWare/errorHandler';
const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ extended: false, limit: '100mb' }));
app.use('/api', router);
app.use(errorHandler());
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
