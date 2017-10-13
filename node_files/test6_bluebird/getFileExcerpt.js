//utils/getFileExcerpt.js
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));

module.exports = function getPost(){
	return fs.readFileAsync(file, 'utf8').then(function(content){
        return {
            excerpt: content.substr(0, 100)
        }
    });
}
