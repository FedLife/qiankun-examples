const _argJson = require('minimist')(process.argv.slice(2))
process.env.NODE_ENV = process.env.NODE_ENV || _argJson['NODE_ENV'] || 'production'

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const fs = require('fs')
// const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();

app.use(logger('dev'));

// view engine setup
app.set('views', [path.join(__dirname, './public'), path.join(__dirname, 'views')]);
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html');

// 服务器扩展
if (fs.existsSync(path.join(__dirname, 'extend.js'))) {
  require(path.join(__dirname, 'extend.js'))(app);
}

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
