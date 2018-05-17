//this code is exported and can be used anywhere to make sure a user is logged in
//before viewing or actioning anything
module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: "You must log in!" });
  }

  next();
};
