document.getElementById("chooseArtist").onclick = makeRequest

function makeRequest(){

  var artistchoice = document.getElementById("inputArtist").value;

  var request = new XMLHttpRequest();
  request.open('GET', '/api?artist='+artistchoice, true);

  request.onload = function() {
      console.log("works")
      if (request.status >= 200 && request.status < 400) {
        // Success!
        var data = JSON.parse(request.responseText);
        console.log(data)
        document.getElementById("Artist").innerHTML = data.artist
        document.getElementById("Song").innerHTML = data.song
        document.getElementById("lyric").innerHTML = data.lyric

      } else {
        // We reached our target server, but it returned an error

      }
    };

    request.onerror = function() {
      // There was a connection error of some sort
    };

    request.send();
}
