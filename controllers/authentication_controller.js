const UserModel = require("./../database/models/user_model");

function loginForm(req, res) {


}

function loginVerify(req, res) {
}

async function create(req, res) {
  // res.json(req.body);
  const user = await UserModel.create(req.body);
  console.log("user", user);
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