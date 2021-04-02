
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const User = require('../models/User');

module.exports = (passport) => {

  passport.serializeUser(function (user, done) {
    console.log("user.....serializeUser......");
    //console.log(user);
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    console.log("...deserializeUser...");
    User.findById(id, function (err, user) {
      console.log("err");
      console.log(err);
      done(err, user);
    });
  });

  passport.use('local-login',new LocalStrategy(
    { usernameField: "email" },
    (email, password, done) => {
      console.log(email);
      console.log(password);
      User.findOne({ email: email })
        .then(user => {
          if (user) {
            bcrypt.compare(password, user.password, function (err, res) {
              if (res) {
                return done(null, user);
              } else {
                return done(null, false);
              }
            });
          } else {
            return done(null, false);
          }
        });
    }
  ));

}