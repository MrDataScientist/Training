//Parse data from JSON POST and insert into MYSQL

var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mysql = require('mysql');

// Configure MySQL connection
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'node',
	password: 'node',
	database: 'node_project'
  })

//Establish MySQL connection
connection.connect(function(err) {
   if (err)
      throw err
   else {
       console.log('Connected to MySQL!');
       // Start the app when connection is ready
       app.listen(3000);
       console.log('Server listening on port 3000');
 }
});

// parse the json data
app.use(bodyParser.json())

//callback
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname+ '\\index.html'));
});

//post
app.post('/', function(req, res) {

var jsondata = req.body;
var values = [];

for(var i=0; i< jsondata.length; i++)
  values.push([jsondata[i].SKU,jsondata[i].AOI4326WKT,jsondata[i].BBox,jsondata[i].SizeOfAOI,jsondata[i].StartDate,jsondata[i].EndDate]
  );

//Bulk insert using nested array [ [a,b],[c,d] ] will be flattened to (a,b),(c,d)
connection.query('INSERT INTO members (SKU, AOI4326WKT, BBox, SizeOfAOI, StartDate, EndDate) VALUES ?', [values], function(err,result) {
  if(err) {
     res.send('Error');
  }
 else {
     res.send('Data stored!');
  }
});
});
