// define margin and svg size
var margin = { top: 50, bottom: 50, left: 50, right: 50 }
var width = 800
var height = 600

// create svg
var exampleBarChartSvg = d3
  .select('#example-bar-chart')
  .append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
  .append('g')
  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

  d3.csv('./files/data/lebron.csv', data => {
    console.log(data) // check the input data format in the browser console
  })