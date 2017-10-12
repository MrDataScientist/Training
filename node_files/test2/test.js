var files = fs.readdirSync(homedir);
var path = require('path');

for(var i in files) {
   if(path.extname(files[i]) === ".txt") {
       //do something
   }
}
