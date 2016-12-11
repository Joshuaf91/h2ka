const router = require('express').Router();
const User = require('../model/User');

//directs traffic for all api calls
//localhost:9999/api/user/*

const validateUser = (req, res) => {
  User.findOne({
    where: {
      username: req.params.user,
      password: req.params.password
    }
  })
  .then((data) => {
    res.send({
      id: data.id
    })
  })
  .catch((err) => {
    res.sendStatus(500)
  })
}

const getUserbyId = (req, res) => {
  User.findById(req.params.id)
  .then((data) => {
    console.log(data)
    data.password = null;
    // let userInfo = Object.assign({}, data, {password: null})
    // console.log(userInfo)
    res.send(data)
  })
}

router.route('/:id')
  .get(getUserbyId)

router.route('/validate/:user/:password')
  .get(validateUser)

module.exports = router;
