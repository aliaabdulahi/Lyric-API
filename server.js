const http = require('http');
const fs = require('fs')
const url = require('url');
var querystring = require('querystring');
// const figlet = require('figlet')

//
const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  var params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  //local host 8000
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  // local host 8000 Drake
  else if (page == '/api') {
    if('artist' in params){
      if(params['artist']== 'Drake'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        var objToJson = {
          artist: "Drake",
          song: "God's plan",
          lyric: "I only love my bed and my momma, I'm sorry"
        }
        res.end(JSON.stringify(objToJson));
      } //artist == Drake
      //Rihanna
      else if(params['artist']== 'Rihanna'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        var objToJson = {
          artist: "Rihanna",
          song: "Needed Me",
          lyric: "Didn't they tell you that I was a savage? Fuck ya white horse and ya carriage Bet you never could imagine Never told you you could have it?"
        }
        res.end(JSON.stringify(objToJson));
      } //artist == Rihanna
      //Nicki Minaj
      else if(params['artist']=== 'NickiMinaj'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        var objToJson = {
          artist: "Nicki Minaj",
          song: "Poke it out",
          lyric: "All of my buddies on ten , all of my moneys in Yen All of my work is sellin', Thank you, and please come again"
        }
        res.end(JSON.stringify(objToJson));
      } //artist == Nicki Minaj
      //Smokepurpp
      else if(params['artist']=== 'Smokepurpp'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        var objToJson = {
          artist: "Smokepurpp",
          song: "Audi",
          lyric: "I don't want friends I want audi's"
        }
        res.end(JSON.stringify(objToJson));
      } //artist == Smokepurpp
      //ZiggyMarley
      else if(params['artist']=== 'ZiggyMarley'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        var objToJson = {
          artist: "ZiggyMarley",
          song: "Audi",
          lyric: "So don't let nobody stop us Free spirits have to soar With you, I share the gift The gift that we now know"
        }
        res.end(JSON.stringify(objToJson));
      } //artist == ZiggyMarley
      else if(params['student'] != 'leon' || 'bob'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        var objToJson = {
          name: "unknown",
          status: "unknown",
          currentOccupation: "unknown"
        }
        res.end(JSON.stringify(objToJson));
      }//student != leon
    }//student if
  }//else if
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }
  // }else{
  //   figlet('404!!', function(err, data) {
  //     if (err) {
  //         console.log('Something went wrong...');
  //         console.dir(err);
  //         return;
  //     }
  //     res.write(data);
  //     res.end();
  //   });
});//const server = http.createServer(function(req, res)

server.listen(8000);
