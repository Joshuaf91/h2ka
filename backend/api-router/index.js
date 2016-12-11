const router = require("express").Router();

//directs traffic for all api calls
//localhost:9999/api/*

router.use('/post', require("./post-router"));

router.use('/user', require("./user-router"));

module.exports = router;
