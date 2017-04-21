var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    password = 'd6F3Efeq';

var encrypt = function (text){
  var cipher = crypto.createCipher(algorithm,password)
  var crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}
 
var decrypt = function (text){
  var decipher = crypto.createDecipher(algorithm,password)
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}

var User = require('../db/user');

//Add user
exports.addUser = function(req, res, next) {

  var newUser = new User({
    _id: req.body._id,
    name: req.body.name,
    email: req.body.email,
    birthday: req.body.birthday,
    cep: req.body.cep,
    address: req.body.address,
    sex: req.body.sex,
    tel: req.body.tel,
    password: encrypt(req.body.password)
  });

  // adding new user to DB
  newUser.save(function(err) {
    if (err) throw err;

    console.log('user saved successfully');
  });

  return res.json(newUser);

}

//Read user by ID
exports.readUser = function(req, res, next) {
  User.findById(req.params.id, function(err, user) {
      if (err) throw err;

      console.log(user);
      return res.json(user);
  });

}

//Function to read all users
exports.readAllUser = function(req, res, next) {
  User.find({}, function(err, users) {
      if (err) throw err;

      console.log(users);
      return res.json(users);
  });
}

//Function to read quantity of users determined and skipping some values (using limit and skip)
exports.readLimitSkipUser = function(req, res, next) {
  User.find({}, function(err, users) {
      if (err) throw err;

      console.log(users);
      return res.json(users);
  }).limit(parseInt(req.params.limit)).skip(parseInt(req.params.skip));
}