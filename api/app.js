var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose=require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
var MongoStore = require('connect-mongodb-session')(session);
const passport = require('passport');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testApi=require('./routes/testRouter');
var cross =require('cors');
var app = express();



app.use(cross({origin: "http://localhost:3000", credentials: true}));

//Load passport
require('./config/passport')(passport);

// DB Config
const db=require('./config/keys').mongoUrl;

// Connect to MongoDB
mongoose
.connect(db,{ useNewUrlParser: true ,useUnifiedTopology: true})
.then("mongoose connected")
.catch(err => console.log(err));



/* app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Credentials", "true");
  console.log("===s----");
  next();
}) */


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
    cookie: {maxAge: 60 * 60 * 24 * 1000},
    store: new MongoStore({ 
      mongooseConnection: mongoose.connection,
    }),
  })
);

/* app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin',  "http://localhost:3000");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  if ('OPTIONS' == req.method) {
    res.send(200);
} else {
    next();
}
}); */


// Connect flash
app.use(flash());

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use("/api/testApi",testApi);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
