/*const fs = require('fs');
var path = require('path');

var myPath = "/files";
fs.readdir(path, function(fileNames) {
    for(var i = 0; i < fileNames.length; i++) {
      var fileName = fileNames[i];
      if(path.extname(fileName) === ".txt") {
        fs.readfile(path.join(myPath,fileName), function(err,data) {
          console.log(data);
        });
        break;
      }
    }
  }
);
*/
// asynchDirList.js

var fs = require('fs');  //require node filesystem module
var path = require('path'); //require node path module (a couple of tools for reading path names)

var pathSupplied = process.argv[2];
var extFilter = 'txt';

function extension(element) {
  var extName = path.extname(element);
  return extName === '.' + extFilter;
};

fs.readdir(pathSupplied, function(err, list) {
  list.filter(extension).forEach(function(value) {
    console.log(value);
  });
});
