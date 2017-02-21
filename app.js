'use strict';

var catalogEntries = [];

var catalogPick = [];

function CatalogEntry(name, imageSrc){
  this.name = name;
  this.image = imageSrc;
  this.timesShown = 0;
  this.timesClicked = 0;
  catalogEntries.push(this);
}

var catalogEntryOne = new CatalogEntry('bag', 'assets/bag.jpg');

var catalogEntryTwo = new CatalogEntry('banana', 'assets/banana.jpg');

var catalogEntryThree = new CatalogEntry('bathroom', 'assets/bathroom.jpg');

var catalogEntryFour = new CatalogEntry('boots', 'assets/boots.jpg');

var catalogEntryFive = new CatalogEntry('breakfast', 'assets/breakfast.jpg');

var catalogEntrySix = new CatalogEntry('bubblegum', 'assets/bubblegum.jpg');

var catalogEntrySeven = new CatalogEntry('chair', 'assets/chair.jpg');

var catalogEntryEight = new CatalogEntry('cthulhu', 'assets/cthulhu.jpg');

var catalogEntryNine = new CatalogEntry('dog-duck', 'assets/dog-duck.jpg');

var catalogEntryTen = new CatalogEntry('dragon', 'assets/dragon.jpg');

var catalogEntryEleven = new CatalogEntry('pen', 'assets/pen.jpg');

var catalogEntryTwelve = new CatalogEntry('pet-sweep', 'assets/pet-sweep.jpg');

var catalogEntryThirteen = new CatalogEntry('scissors', 'assets/scissors.jpg');

var catalogEntryFourteen = new CatalogEntry('shark', 'assets/shark.jpg');

var catalogEntryFifteen = new CatalogEntry('sweep', 'assets/sweep.png');

var catalogEntrySixteen = new CatalogEntry('tauntaun', 'assets/tauntaun');

var catalogEntrySeventeen = new CatalogEntry('unicorn', 'assets/unicorn.jpg');

var catalogEntryEighteen = new CatalogEntry('usb', 'assets/usb.gif');

var catalogEntryNineteen = new CatalogEntry('water-can', 'assets/water-can.jpg');

var catalogEntryTwenty = new CatalogEntry('wine-glass', 'assets/wine-glass.jpg');

var displayImages = function() {
  for (var i = 0; i < 3; i++) {
    var picks = Math.floor(Math.random() * 20);

    if(catalogPick.includes(catalogEntries[picks])) {
      i--;
      console.log(i);
    } else {
      catalogPick.push(catalogEntries[picks]);
      console.log(i);
    }
  }
};

displayImages();

console.log(catalogPick);

var imgOne = (catalogPick[1].image);

document.body.appendChild(img);


// function show_image(name, imgSrc, height, alt) {
//   var img = document.createElement('imgOne');
//   img.name = name;
//   img.src = src;
//   img.width = width;
//   img.height = height;
//   img.alt = alt;
//
//     // This next line will just add it to the <body> tag
//   document.body.appendChild(img);
// }

// var firstPic = document.createElement(catalogPick[1]);
//
// console.log(firstPic);
