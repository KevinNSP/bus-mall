var allProductsAr = JSON.parse(localStorage.allProductsAr);

console.log(allProductsAr);

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

  myChart();
}
// function chartData() {
//   for (var i = 0; i < allProductsAr.length; i++) {
//     chartImageNames.push(allProductsAr[i].name);
//     chartImageViews.push(allProductsAr[i].timesShown);
//     chartImageClicks.push(allProductsAr[i].timesClicked);
//   }
//
//   console.log(chartImageNames);
//   console.log(chartImageViews);
//   console.log(chartImageClicks);
// }
//
// function myChart() {
//   var ctx = document.getElementById('chart').getContext('2d');
//   chartData();
//   //var data = allProducts[i].clicks;
//   var labelColors = 'blue';
//
//   var myChartData = {
//     type: 'bar',
//     data: {
//       labels: chartImageNames,
//       datasets: [{
//         label: 'Number of Views',
//         data: chartImageViews,
//         backgroundColor: labelColors,
//       },
//       {
//         label: 'Number of Votes',
//         data: chartImageClicks,
//         backgroundColor: '#f58a07',
//       }],
//     },
//     options: {
//       scales: {
//         yAxes: [{
//           ticks: {
//             beginAtZero:true
//           }
//         }]
//       }
//     }
//   };
//   var myChart = new myChart(ctx, myChartData);
//
//   myChart();
// }
