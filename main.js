var cat_temp= document.getElementById('tempcat');
var cat = cat_temp.content.cloneNode(true);
console.log(cat);

var grid= document.querySelector('.catGrid');

var request = new XMLHttpRequest();
request.open('GET', 'https://ma-cats-api.herokuapp.com/api/cats', true);

request.send();





request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    
    var data = JSON.parse(request.responseText);
    console.log(data[0]);
    for (var i=0; i<20; i++){
        var cat = cat_temp.content.cloneNode(true);
        grid.appendChild(cat);
    }
    


  } else {
    // We reached our target server, but it returned an error

  }
};

request.onerror = function() {
  // There was a connection error of some sort
};


