var fs = require('fs');

fs.rename("./sample.json","./folder1/thisisme.json", function(err){
  if(err){
    console.log(err);
  }
  console.log("success");
});
