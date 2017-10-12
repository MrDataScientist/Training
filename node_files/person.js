var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

//javascript object
var realPerson= {
  name:'',  // variable
  sayings: [] // array
};

rl.question("what is the name of a real person?", function(answer){

  //call back function for the name
  realPerson.name = answer;

  // the function we need the set a readline prompt
  rl.setPrompt(`what would ${realPerson.name} say`);
  rl.prompt();

  rl.on('line', function(sayings){

    realPerson.sayings.push(sayings.trim());

    if(sayings.toLowerCase().trim() === 'exit'){
      rl.close();
    } else {
      rl.setPrompt(`what else would ${realPerson.name} say? ('exit' to leave)`);
      rl.prompt();
    }

  });
});

rl.on('close', function(){
  console.log("%s is a real person that says %", realPerson.name, realPerson.sayings);
});
