const express = require('express');
// const router = require('koa-router');
const bodyParser = require('body-parser');
const config = require('./.config.js');
// const crypto = require('crypto');
// const axios = require('axios');
const cors = require('cors');
var amazon = require('amazon-product-api');

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

var client = amazon.createClient({
  awsId: 'AKIAIGAPYFQ4SQ7BCLPQ',
  awsSecret: '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',
  awsTag: '005282830887'
});

app.get('/api/search/:query', function(req, res){
  client.itemSearch({
    keywords: req.params.query,

    responseGroup: 'ItemAttributes,Offers,Images'
  }).then(function(results){
    console.log(results);
    res.status(200).send(results);
  }).catch(function(err){
    console.log(err);
  });
})

// client.itemSearch({
//   director: 'Quentin Tarantino',
//   actor: 'Samuel L. Jackson',
//   searchIndex: 'DVD',
//   audienceRating: 'R',
//   responseGroup: 'ItemAttributes,Offers,Images'
// }).then(function(results){
//   console.log(results);
// }).catch(function(err){
//   console.log(err);
// });

// console.log(req.params.query);
// var d = new Date();
// var unsignedUrl = 'http://webservices.amazon.com/onca/xml?AWSAccessKeyId=AKIAIGAPYFQ4SQ7BCLPQ&AssociateTag=005282830887&Keywords=' + req.params.query + '&Operation=ItemSearch&ResponseGroup=Images,ItemAttributes&SearchIndex=All&Service=AWSECommerceService&Timestamp=';
// var string = `GET
//               webservices.amazon.com
//               /onca/xml
//               AWSAccessKeyId=AKIAIGAPYFQ4SQ7BCLPQ&AssociateTag=005282830887&Keywords=${req.params.query}&Operation=ItemSearch&ResponseGroup=Images,ItemAttributes&SearchIndex=All&Service=AWSECommerceService&Timestamp=${d.toUTCString()}`;
//
// function generateHmac(string, secretKey, algorithm, encoding){
//   encoding = encoding || 'base64';
//   algorithm = algorithm || 'sha256';
//   return crypto.createHmac(algorithm, secretKey).update(string).digest(encoding);
// }
//
// var rfc2104Hmac = generateHmac(string, config.secretKey);
//
// console.log(rfc2104Hmac);
//
//   axios({
//   method: 'GET',
//   url: unsignedUrl + d.toUTCString() + '&Signature=' + rfc2104Hmac
// }).then(function(response){
//   console.log(response);
// })

// });

// app.post('/complete', function(req, res) {
//   console.log(req);
//   res.send('Name: ' + req.body.name);
//   res.send('Email: ' + req.body.email);
//   res.send('Subject: ' + req.body.subject);
//   res.send('Message: ' + req.body.message);
// });

app.listen(3000, function(){
  console.log('Listening on 3000');
})

module.exports = app;
