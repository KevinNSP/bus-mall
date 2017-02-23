'use strict';

var allProductsAr = [];

var displayedProducts = [];

var previousPictures = [];

var totalClicks = 0;

var clickLimit = 0;

function CatalogEntry(name, imageSrc){
  this.name = name;
  this.image = imageSrc;
  this.timesShown = 0;
  this.timesClicked = 0;
  allProductsAr.push(this);
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
    var picks = Math.floor(Math.random() * allProductsAr.length);

    if(displayedProducts.includes(allProductsAr[picks]) || previousPictures.includes(allProductsAr[picks])) {
      i--;
      console.log(i);
    } else {
      displayedProducts.push(allProductsAr[picks]);
      console.log(i);
    }
  }
  console.log(previousPictures); //logs previous round of displayed pictures

  previousPictures = [];

  console.log(previousPictures); //logs array clear

  previousPictures = displayedProducts;

  console.log(previousPictures); //log new array of pictures
};

function selectImages() {
  chooserImages();
  var getUlEl = document.getElementById('selectorList');
  for (var i = 0; i < 3; i++) {
    var newLi = document.createElement('li');
    getUlEl.appendChild(newLi);
    var newImgTag = document.createElement('img');
    newImgTag.setAttribute('src', displayedProducts[i].image);
    newImgTag.setAttribute('id', displayedProducts[i].name);
    newLi.appendChild(newImgTag);
  }
};

selectImages();

var clickCounter = document.getElementById('selectorList');

clickCounter.addEventListener('click', handleClick);

function handleClick(event) {
  event.preventDefault();
  event.stopPropagation();

  for (var i = 0; i < allProductsAr.length; i++) {
    if(event.target.id === allProductsAr[i].name) {
      allProductsAr[i].timesClicked++;
      console.log(event.target);

      console.log(CatalogEntry[i]);
    }
  }

var shownCounter = document.getElementById('selectorList');

clickCounter.addEventListener('shown', handleShown);

  for (var i = 0; i < 25; i++) {
    if(event.target.id) === allProductsAr[i].name {
      allProductsAr[i].timesShown++;

      console.log(allProductsAr);

      console.log(allProductsAr);

// ------------------------------------------
  var clickCounter = document.getElementById('selectorList');
  clickCounter.innerHTML = '';
  selectImages();

};
