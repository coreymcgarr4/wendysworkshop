const express = require('express');
const bodyParser = require('body-parser');
const config = require('./.config.js');
const cors = require('cors');
const amazon = require('amazon-product-api');
const massive = require('massive');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

function getRandomArbitrary(min, max) {
   return Math.random() * (max - min) + min;
}

var massiveInstance = massive.connectSync({
  connectionString : config.postgresUrl
});

var client = amazon.createClient({
  awsId: 'AKIAIGAPYFQ4SQ7BCLPQ',
  awsSecret: config.secretKey,
  awsTag: '005282830887'
});

app.set('db', massiveInstance);
var db = app.get('db');

app.get('/api/productasin', function(req, res){
  db.get_all_asins([], function(err, products){
    if(err){
      res.send(400).send(err);
      return;
    }
    var asins = products.splice(getRandomArbitrary(0, products.length - 10), 10);
    var asinArray = [];
    for (var i = 0; i < asins.length; i++){
      asinArray.push(asins[i].asin);
    }
    client.itemLookup({
    itemId: asinArray,
    ResponseGroup: 'ItemAttributes,Offers,Images'
    }).then(function(results){
      res.send(results);
    }).catch(function(err){
      console.log(err);
      res.send(err);
    })
  })
})

app.get('/api/search/:query', function(req, res){
  db.get_all_products(['%' + req.params.query + '%'], function(err, products){
    if(err){
      res.send(400).send(err);
      return;
    }
    var asins = products;
    var asinArray = [];
    for (var x = 0; x < asins.length; x++){
      asinArray.push(asins[x].asin);
    }
    client.itemLookup({
    itemId: asinArray.splice(0, 10),
    ResponseGroup: 'ItemAttributes,Offers,Images'
    }).then(function(results){
      res.send(results);
    }).catch(function(err){
      console.log(err);
      res.send(err);
      })
    })
  })

  app.post('/api/subscribers/:name/:email', function(req, res){
    db.add_subscriber([req.params.name, req.params.email], function(err, person){
      if (err){
        console.log(err);
        res.send(err);
      }
      res.send(person);
    })
    db.add_message([req.params.name, req.params.email, req.params.email + ' subscribed', req.params.email + ' HAS SUBSCRIBED.'], function(err, person){
      if (err){
        console.log(err);
        res.send(err);
      }
    })
  })

  app.post('/api/messages/:name/:email/:subject/:message', function(req, res){
    db.add_message([req.params.name, req.params.email, req.params.subject, req.params.message], function(err, message){
      res.send(err);
    })
  })

app.listen(config.port, function(){
  console.log('Listening on 3000');
})

module.exports = app;
