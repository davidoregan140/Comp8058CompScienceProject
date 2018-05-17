/***************************************************************************************
 *    Based on/Adapted from
 *    Titles: Udemy Tutorials, PassportJS documentation, Google OAuth documentation
 *    Author: Grider, S (Udemy Tutorials)
 *    Date: 2018
 *    Code version: 1.0
 *    Sources: https://www.udemy.com/node-with-react-fullstack-web-development/learn/v4/content
              http://www.passportjs.org/docs/
              https://developers.google.com/identity/protocols/OAuth2
 *
 ***************************************************************************************/

const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/invites");
    }
  );

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
