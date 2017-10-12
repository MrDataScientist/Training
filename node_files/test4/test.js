var async = require('async');
app.get('/json', function(req, res) {
  var work = {
    file01: async.apply(fs.readFile, __dirname + '/file01.json'),
    file02: async.apply(fs.readFile, __dirname + '/file02.json')
  };
  async.parallel(work, function (error, results) {
    if (error) {
      res.status(500).send(error);
      return;
    }
    //might need string->Object here
    results['file01'] = JSON.parse(results['file01']);
    results['file02'] = JSON.parse(results['file02']);
    res.send(results);
  });
});
