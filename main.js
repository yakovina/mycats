var cat_temp= document.getElementById('tempcat');
var cat = cat_temp.content.cloneNode(true);
var grid= document.querySelector('.catGrid');


var numberOfCats = prompt('Введите количество котов', 10);

if (isNaN(numberOfCats)) {
  alert( "Вы ввели не число. Выведем 10 котов" );
  numberOfCats=10;
} else {
  numberOfCats = +numberOfCats;
}

var request = new XMLHttpRequest();
request.open('GET', 'https://ma-cats-api.herokuapp.com/api/cats', true);

request.send();



request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    var myCats= [];
    var data = JSON.parse(request.responseText);
    for (var i=0; i<numberOfCats; i++){
        myCats[i] = cat_temp.content.cloneNode(true);
        myCats[i].querySelector('.cat__image').src = data.cats[i].img_url;
        grid.appendChild(myCats[i]);

    }

  } else {
    // We reached our target server, but it returned an error
  }
};

request.onerror = function() {// There was a connection error of some sort
};


function makeCounter() {
  var currentCount = 1;

  return function() {
    return currentCount++;
  };
}

var counter = makeCounter();
