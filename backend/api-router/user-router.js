const router = require('express').Router();
const User = require('../model/User');

//directs traffic for all api calls
//localhost:9999/api/user/*

const validateUser = (req, res) => {
  console.log(req.query)
  User.findOne({
    where: {
      username: req.query.username,
      password: req.query.password
    }
  })
  .then((data) => {
    req.session.userID = data.id;
    req.session.cookie.maxAge = 1000*60*3;
    req.session.save();
    console.log(req.session);
    res.send(data);
  })
  .catch((err) => {
    res.sendStatus(500)
  })
}

const getUserbyId = (req, res) => {
  User.findById(req.params.id)
  .then((data) => {
    res.send(data)
  })
}

//this handels checks if session exist will autmoatcly log user in.
const validateUser1 = (req, res) => {
  console.log(req.session)
  if(req.session.userID){
    User.findById(req.session.userID)
    .then((data) => {
      res.send(data)
    })
  }else {
    res.send(false);
  }
}

router.route('/validate')
  .get(validateUser)

router.route('/validate/1')
  .get(validateUser1)

router.route('/:id')
  .get(getUserbyId)

module.exports = router;
