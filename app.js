'use strict';

var catalogEntries = [];

var catalogShowing = [];

var totalClicks = 0;

var clickLimit = 0;

var picsContainer = 0;

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
var catalogEntrySixteen = new CatalogEntry('tauntaun', 'assets/tauntaun.jpg');
var catalogEntrySeventeen = new CatalogEntry('unicorn', 'assets/unicorn.jpg');
var catalogEntryEighteen = new CatalogEntry('usb', 'assets/usb.gif');
var catalogEntryNineteen = new CatalogEntry('water-can', 'assets/water-can.jpg');
var catalogEntryTwenty = new CatalogEntry('wine-glass', 'assets/wine-glass.jpg');

var displayImages = 3;

var chooserImages = function() {
  for (var i = 0; i < displayImages; i++) {
    var picks = Math.floor(Math.random() * catalogEntries.length);

    if(catalogShowing.includes(catalogEntries[picks])) {
      i--;
      console.log(i);
    } else {
      catalogShowing.push(catalogEntries[picks]);
      console.log(i);
    }
  }
};

// console.log(catalogShowing);
//
// var imgSrcOne = (catalogShowing[0].image);
// var imgSrcTwo = (catalogShowing[1].image);
// var imgSrcThree = (catalogShowing[2].image);
//
// var currentlyShowing = [imgSrcOne, imgSrcTwo, imgSrcThree];
//
// console.log(currentlyShowing);
//
// console.log(imgSrcOne);
// console.log(imgSrcTwo);
// console.log(imgSrcThree);

function selectImages() {
  chooserImages();
  var getUlEl = document.getElementById('selectorList');
  for (var i = 0; i < 3; i++) {
    var newLi = document.createElement('li');
    getUlEl.appendChild(newLi);
    var newImgTag = document.createElement('img');
    newImgTag.setAttribute('src', catalogShowing[i].image);
    newImgTag.setAttribute('id', catalogShowing[i].name);
    newLi.appendChild(newImgTag);
  }
};

selectImages();

var clickCounter = document.getElementById('selectorList');

clickCounter.addEventListener('click', handleClick);

function handleClick(event) {
  event.preventDefault();
  event.stopPropagation();
}

console.log(handleClick);




// var img = new Image();
// img.src = 'imgSrcOne';
// element.appendChild(img);
//
// console.log(img);

// var firstImg = document.createElement('img');
// firstImg.setAttribute('imageSrc', )
//

// while (currentlyShowing.includes(imgSrcOne)) {
//   imgSrcOne = chooserImages();
// }
// picsContainer.removeChild(imgSrcOne);
// imgSrcOne = document.createElement('img');
// imgSrcOne.setAttribute('src', imgSrcOne.image);
// picsContainer.appendChild(imgOne);
//
//

// function displayPics() {
//   var imgOne = catalogShowing[0];
//   var imgTwo = catalogShowing[1];
//   var imgThree = catalogShowing[2];
// }
//
// console.log(imgOne);
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
