var path = require('path');
var express = require('express');
var app = express();
var indexRouter = require('./routes/index');
var userRouter = require('./routes/users');

//设置模板路径和引擎
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');

app.use('/', indexRouter);
app.use('/users', userRouter);

app.listen(3000);