'use strict';

const express = require('express');
const mongo = require('mongodb');
const mongoose = require('mongoose');
const dns = require('dns');
const cors = require('cors');
const bodyParser = require('body-parser');
const Link = require('./public/link');
const urlParse = require('url-parse');
const Counter = require('./public/counter');

const app = express();

// Basic Configuration 
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGOLAB_URI, { useNewUrlParser: true }, (err, client) => {
  
});


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public/'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/app/index.html');
});

app.get('/api/hello', function (req, res) {
  res.json({greeting: 'hello API'});
});

app.post('/api/shorturl/new', function(req, res) {
  let url = req.body.url;
  if (url.match(/http(s)?:\/\//) == null) {
    url = "http://" + url;
  }
  const parsedUrl = new URL(url);
  const addressRecord = parsedUrl.hostname;
  console.log(addressRecord);
  dns.lookup(addressRecord, (err, address, family) => {
    if (err) {
      res.json({ error: err });
    } else {
      const newUrl = {
        original_url: parsedUrl,
      }
      Link.create(newUrl, function(err, newEntry) {
        if (err) {
          console.log(err);
          res.json({ error: err });
        } else {
          const resObject = {
            original_url: newEntry.original_url,
            short_url: Number(newEntry.short_url)
          }
          res.json(resObject);
        }
      })

    }
  });
});

app.get('/api/shorturl/:url_id', function(req, res) {
  const urlId = req.params.url_id;
  Link.findOne({ short_url: parseInt(urlId) }, function(err, foundUrl) {
    if (err) {
      console.log(err);
      res.json(err);
    } else {
      res.redirect(foundUrl.original_url);
    }
  })
})


app.listen(port, function () {
  console.log('Node.js listening ...');
});