const UserModel = require("./../database/models/user_model");

function loginForm(req, res) {


}

function loginVerify(req, res) {
}

function create(req, res) {
  console.log("till here");
  // res.json(req.body);
  // const { email, password } = req.body;
  const user = UserModel.create(req.body);
  req.session.user = user;
  res.redirect("/dashboard");
}

function make(req, res) {
  res.render("authentication/make");
}





module.exports = {
  create,
  make,
  loginForm,
  loginVerify
}