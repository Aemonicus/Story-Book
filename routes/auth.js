const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "select_account"
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/dashboard"); 
    // res.redirect("/");Version du prof mais problème, ne renvoie pas sur l'accueil logée
  }
);

router.get("/verify", (req, res) => {
  if (req.user) {
    console.log(req.user);
  } else {
    console.log("Not Auth");
  }
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;

// Version prof

// const express = require('express');
// const router = express.Router();
// const passport = require('passport');

// router.get('/google', passport.authenticate('google', {scope: ['profile', 'email']}));

// router.get('/google/callback',
//   passport.authenticate('google', { failureRedirect: '/' }),(req, res) => {
//     res.redirect('/dashboard');
//   });

// router.get('/verify', (req, res) => {
//   if(req.user){
//     console.log(req.user);
//   } else {
//     console.log('Not Auth');
//   }
// });

// router.get('/logout', (req, res) => {
//  req.logout();
//  res.redirect('/');
// });

// module.exports = router;
