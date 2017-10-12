let fs = require('fs');

function readFile(file){
  return fs.readFileSync(file, 'utf8');
}

function writeFile(file, content){
  return fs.writeFile(file, content, handleError)
}

function handleError(err){
  if(err){
    return console.log('ahhhh!');
  }
  return console.log('the file was saved!');
}

function copyFile(target, src){
  writeFile(target, readFile(src));
}

copyFile('./data.txt', './start.txt');
