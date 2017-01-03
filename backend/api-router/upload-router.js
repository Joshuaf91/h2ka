const router = require("express").Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');


//directs traffic for all api calls
//localhost:9999/api/upload/* 

router.post('/', multer({dest: './temp-file-holding/'}).any(), (req,res)=>{
	console.log(req.body); //form fields
	/* example output:
	{ title: 'abc' }
	 */
	console.log(req.files); //form files
	/* example output:
           [{ fieldname: 'upl',
				originalname: 'grumpy.png',
				encoding: '7bit',
				mimetype: 'image/png',
				destination: './uploads/',
				filename: '436ec561793aa4dc475a88e84776b1b9',
				path: 'uploads/436ec561793aa4dc475a88e84776b1b9',
				size: 277056 }]
	*/

	//this handels the renaming of the files because mutter gives some weird names!!!! and no extention
	let extention = '.'+ req.files[0].mimetype.split('/')[1];
	let oldPath = req.files[0].destination + req.files[0].filename;
	let newPath = path.join(__dirname, '../../frontend/assets/Forms/') + req.body.title + extention;
	fs.rename(oldPath, newPath);
	res.status(200).end();
});

router.get('/',(req,res)=>{
	console.log("im in here")
	fs.readdir(path.join(__dirname, '../../frontend/assets/Forms/'), (err, files)=>{
		if (err) {
			console.log(err)
		} else {
			files = files.filter((element, index)=>{
				if(element[0] === "."){
					return false;
				}else {
					return true;
				}
			})
		}
		res.send(files);
	})
})

module.exports = router;