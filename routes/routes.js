exports.home = function (req, res) {
  res.render('index.pug' , {port : "3000"});
  console.log('User requested ' + 'index.pug ' + 'at ' + Date.now().toString());
};


exports.login = function(req, res) {
  res.render('login.pug');
};

exports.userLogin = function (req , res) {
  res.render('user.pug');
};

exports.notFound = function(req , res)  {
  res.render('404.pug');
};
