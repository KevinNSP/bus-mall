'use strict';

// GLOBAL VARIABLES

var allProductsAr = []; //ARRAY OF PRODUCT VARIABLES

var displayedProducts = []; //ARRAY OF CURRENTLY DISPLAYED PRODUCTS

var previousPictures = []; //ARRAY OF 3 PREVIOUSLY DISPLAYED IMAGES

var totalClicks = 0; //TOTAL NUMBER OF CLICKS PER IMAGE

var clickLimit = 0; //TOTAL AMOUNT OF CLICKS PER IMAGE

var maxClicks = 25; // MAXIMUM AMOUNT OF CLICKS BEFORE STOPPING

var displayImages = 3;//NUMBER OF IMAGES TO DISPLAY

var clickCounter = document.getElementById('selectorList'); //RETRIEVE selectorList FROM DOM

// PRODUCT VARIABLES

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

// CLICK IMAGE FUNCTION ==================================

function handleClick(event) {
  event.preventDefault();
  event.stopPropagation();

  if (totalClicks < maxClicks) {
    for (var i = 0; i < allProductsAr.length; i++) {
      if(event.target.id === allProductsAr[i].name) {
        allProductsAr[i].timesClicked++;
        console.log(event.target);
      } else {
      }
    }
    totalClicks += 1;

    // console.log('totalClicks', totalClicks);

    displayedProducts = [];

    var clickCounter = document.getElementById('selectorList');
    clickCounter.innerHTML = '';
    selectImages();

  };

  if(totalClicks >= maxClicks) {
    displayList();
    clickCounter.removeEventListener('click', handleClick);
    // myChart();
  }
};

console.log(allProductsAr);

// allProductsAr CONSTRUCTOR

function CatalogEntry(name, imageSrc){
  this.name = name;
  this.image = imageSrc;
  this.timesShown = 0;
  this.timesClicked = 0;
  allProductsAr.push(this);
}

// ALL AVAILABLE IMAGES FUNCTION ========================

var chooserImages = function() {
  for (var i = 0; i < displayImages; i++) {
    var picks = Math.floor(Math.random() * allProductsAr.length);

    if(displayedProducts.includes(allProductsAr[picks]) || previousPictures.includes(allProductsAr[picks])) {
      i--;
      // console.log(i);
    } else {
      allProductsAr[picks].timesShown += 1;
      // console.log('**-----------------------**');
      // console.log('times shown: ', allProductsAr[picks].timesShown);
      displayedProducts.push(allProductsAr[picks]);
      // console.log(i);
    }
  }
  // console.log(previousPictures); //logs previous round of displayed pictures

  previousPictures = [];

  // console.log(previousPictures); //logs array clear

  previousPictures = displayedProducts;

  // console.log(previousPictures); //log new array of pictures
};

// FUNCTION TO SELECT 3 IMAGES ================

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

// FUNCTION TO DISPLAY LIST ===================

function displayList() {
  var getUlEl = document.getElementById('listOfImages');
  for (var i = 0; i < allProductsAr.length; i++) {
    var newListLi = document.createElement('li');
    newListLi.textContent = (allProductsAr[i].timesClicked) + ' votes for ' + (allProductsAr[i].name);
    getUlEl.appendChild(newListLi);

  }
  console.log(allProductsAr);
  saveProductsToLocalStorage(allProductsAr);
  myChart();
};


// var allProductsJSON = function saveProductsToLocalStorage(allProducts) {
//   return JSON.stringify(allProducts); //convert all objects to strings
//   console.log(allProductsJSON);
// };

selectImages();

clickCounter.addEventListener('click', handleClick);

// for (var i = 0; i < array.length; i++) {
function saveProductsToLocalStorage(allProducts) {
  localStorage.allProductsAr = JSON.stringify(allProducts);
};

// *****=============CHART START=====================**

var chartImageNames = [];
var chartImageClicks = [];
var chartImageViews = [];

function chartData() {
  for (var i = 0; i < allProductsAr.length; i++) {
    chartImageNames.push(allProductsAr[i].name);
    chartImageClicks.push(allProductsAr[i].timesClicked);
    chartImageViews.push(allProductsAr[i].timesShown);
  }

  // console.log(chartImageNames);
  // console.log(chartImageViews);
  // console.log(chartImageClicks);
}

function myChart() {
  var ctx = document.getElementById('chart').getContext('2d');
  chartData();
  //var data = allProducts[i].clicks;
  var labelColors = 'blue';

  var myChartData = {
    type: 'bar',
    data: {
      labels: chartImageNames,
      datasets: [{
        label: 'Number of Views',
        data: chartImageViews,
        backgroundColor: labelColors,
      },
      {
        label: 'Number of Votes',
        data: chartImageClicks,
        backgroundColor: '#f58a07',
      }],
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  };
  var myChart = new Chart(ctx, myChartData);
}
