const router = require("express").Router();
const Post = require("../model/Post");
const User = require("../model/User");

//directs traffic for all api calls
//localhost:9999/api/post/*

const getAllPost = (req, res)=>{
	Post.findAll({
		include: [User]
	})
		.then(data=>{
			res.send(data)
		})
		.catch(err=>{
			res.send(500);
		})
}

const makeNewPost = (req, res) => {
	console.log(req.body.userId);
	if(req.body.userId == 1){
		Post.findOrCreate({
			where: {
				title: req.body.title,
				body: req.body.body,
				userId: 1,
			},
			include:[User]
		})
		.then(data=>{
			res.send(data);
		})
		.catch(err=>{
				res.sendStatus(500);
			})
	}else{
		//this user cant make post.
		res.sendStatus(500)
	}
}

const getById= (req,res)=>{
	console.log(req.params.id);
	Post.findOne({
		where: {
			id: req.params.id
		},
		include:[User]
	})
	.then(data=>{
		res.send(data);
	})
	.catch(err=>{
		res.sendStatus(500);
	})
}

router.route("/")
	.get(getAllPost)
	.post(makeNewPost);

router.route("/:id")
	.get(getById)
	// .put(editById)
	// .delet(removeById);

module.exports = router;
