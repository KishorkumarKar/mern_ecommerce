var express = require('express');
const User = require('../models/User');
var router = express.Router();
const user = require('../models/User');
const bcrypt = require('bcryptjs');
const { route } = require('.');
const passport = require('passport');
const {ensureAuthenticated}=require('../config/auth');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

// logout user
router.get("/logout",(req,res,next)=>{
  req.logout();
  req.session.destroy(function (err) {
    if (err) { return res.send(err); }
    return res.status("200").json({mess:"logout Success Full"});
  });
})
// login user
router.post("/login", (req, res, next) => {


  console.log("login------------")
  console.log(req.isAuthenticated());

    passport.authenticate('local-login', function(err, user, info) {

      console.log('Login route', req.isAuthenticated(), req.session);
      if (err) {
        return res.status(500).json({
          message: error || "Something happend",
          error: error.message || "Server error",
        });
      }
  
      req.logIn(user, function (error, data) {
        if (error) {
          return res.status(500).json({
            message: error || "Something happend",
            error: error.message || "Server error",
          });
        }

        console.log(`req.session.passport: ${req.session.passport.user}`)
        console.log(req.isAuthenticated());
        if(user){
          res.json(user)
        }else{
          res.status(401).json({success:false,error:"Invalid User"})
        }
      });


    })(req, res, next);


})

//Add user
router.post("/add",ensureAuthenticated, function (req, res, next) {
  const { email, password, last_name, first_name } = req.body;
  console.log("======sdaddd===");
  console.log(req.session);
  res.send("api post test");
  /* User.findOne({ email: email })
    .then(user => {
      if (user) {
      } else {
        const newUser = new User({
          first_name,
          last_name,
          email,
          password,
        });

        bcrypt.genSalt(10, function (err, salt) {
          bcrypt.hash(newUser.password, salt, function (err, hash) {
            if (err) throw err;
            newUser.password = hash;
            console.log(newUser);
            newUser.save()
              .then(user => {
                console.log(user);
              })
          });
        });
      }
    }); */
})
module.exports = router;
