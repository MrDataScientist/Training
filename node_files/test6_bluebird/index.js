//routes/index.js
var router = require('express').Router();
var getFileExcerpt = require('../utils/getFileExcerpt')

router.get('/', function(){
	getFileExcerpt.then(function(fileExcerpt){
		res.json({message: fileExcerpt});
	});
});

module.exports = router;
