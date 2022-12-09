import express = require('express');
import {test } from './utils/mysql';
test()
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

app.get('/api/test', (req, res) => {
  res.send({ status: 0, messgae: '注册成功' });
});
