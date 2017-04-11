const express = require('express');
const bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.post('/complete', function(req, res) {
  console.log(req);
  res.send('Name: ' + req.body.name);
  res.send('Email: ' + req.body.email);
  res.send('Subject: ' + req.body.subject);
  res.send('Message: ' + req.body.message);
});

app.listen(3000, function(){
  console.log('Listening on 3000');
})
