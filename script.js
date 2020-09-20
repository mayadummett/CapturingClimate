//FACT GENERATOR
var statsArray = new Array (
  //stats will go in here
  '"Nineteen of the 20 warmest years on record have occurred since 2001." -NASA',
  '"The concentration of carbon dioxide in our atmosphere, as of May 2020, is the highest it has been in human history." -Conservation International',
  '"Natural climate solutions such as restoring degraded forests could create as many as 39 jobs per million dollars spend - that is a job-creation rate more than six times higher than the oil and gas industry." -Conservation International',
  '"The most abundant greenhouse gas, accounting for about two-thirds of greenhouse gases, carbon dioxide, is largely the product of burning fossil fuels." -UN Environment Programme',
  '"2019 was the second warmest year on record (2.07°F above pre-industrial average)" -NOAA',
  '"Measurements made over the last few decades have demonstrated that ocean carbon dioxide levels have risen in response to increased carbon dioxide in the atmosphere, leading to an increase in acidity." -EPA"',
  '"The worst impacts of climate change could be irreversible by 2030." -Earthday.org',
  '"More than 1 million species are at risk of extinction by climate change." -Earthday.org',
  
);
function displayStats() {
  var num = Math.floor(Math.random() * statsArray.length);
  document.getElementById("fact-gen-para").innerHTML = statsArray[num];
}

//charts!
window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	theme: "dark1",
  backgroundColor: "#91C499",
	title:{
		text: "Growth Rate of Atmospheric Carbon Dioxide",
    fontFamily: "Garamond"
	},
  axisY:{
    title:"Annual Increase (ppm)", 
    titleFontFamily: "Garamond",
    titleFontColor: "white",
    titlePadding: 15,
		includeZero: false
	},
  axisX:{
  },
	data: [{        
		type: "line",
    lineColor: "#05668d",
      	indexLabelFontSize: 16,
        indexLabelFontFamily: 'Garamond',
    xValueFormatString: "MMM, YYYY",
		dataPoints: [
		  { x: new Date(1960, 10, 01), y: 0.54 },
      { x: new Date(1965, 10, 01), y: 1.02 },
      { x: new Date(1970, 10, 01), y: 1.06 },
      { x: new Date(1975, 10, 01), y: 1.09 },
      { x: new Date(1980, 10, 01), y: 1.68 },
      { x: new Date(1985, 10, 01), y: 1.26 },
      { x: new Date(1990, 10, 01), y: 1.16 },
      { x: new Date(1995, 10, 01), y: 2.00 },
      { x: new Date(2000, 10, 01), y: 2.61 },
      { x: new Date(2005, 10, 01), y: 2.54 },
    	{ x: new Date(2010, 10, 01), y: 2.32 },
			{ x: new Date(2015, 10, 01), y: 3.02, indexLabel: "\u2191 highest",markerColor: "red", markerType: "circle" },
		]
	}]
});



var chart2 = new CanvasJS.Chart("chartContainer1", {
	animationEnabled: true,
  backgroundColor:"#91C499",
	title:{
		text: "CO2 Emissions By Country",
		horizontalAlign: "center",
  fontFamily: "Garamond",
        fontColor: "white",
        padding: 5,
	},
	data: [{
		type: "doughnut",
		startAngle: 60,
		//innerRadius: 60,
		indexLabelFontSize: 17,
    indexLabelFontFamily: 'Garamond',
    indexLabelFontColor: "white",
		indexLabel: "{label} - #percent%",
		toolTipContent: "<b>{label}:</b> {y} (#percent%)",
		dataPoints: [
			{ y: 28, label: "China" },
			{ y: 21, label: "Rest of the World" },
			{ y: 15, label: "United States" },
			{ y: 7, label: "India"},
			{ y: 5, label: "Russian Federation"},
      { y: 3, label: "Japan"},
      { y: 2, label: "Germany"},
      { y: 2, label: "Islamic Republic of Iran"},
      { y: 2, label: "South Korea"},
      { y: 2, label: "Saudi Arabia"},
      { y: 2, label: "Indonesia"},
      { y: 2, label: "Canada"},
      { y: 2, label: "Mexico"},
      { y: 1, label: "South Africa"},
      { y: 1, label: "Brazil"},
      { y: 1, label: "Turkey"},
      { y: 1, label: "Australia"},
      { y: 1, label: "United Kingdom"},
      { y: 1, label: "Poland"},
      { y: 1, label: "Italy"},
      { y: 1, label: "France"},
		]
	}]
});

var chart3 = new CanvasJS.Chart("chartContainer2", {
	animationEnabled: true,
	theme: "dark1",
  backgroundColor: "#91C499",
	title:{
		text: "Global Mean Sea Level Through the Years",
    fontFamily: "Garamond"
	},
  axisY:{
    title:"GMSL", 
    titleFontFamily: "Garamond",
    titleFontColor: "white",
    titlePadding: 15,
		includeZero: false
	},
  axisX:{
  },
	data: [{        
		type: "line",
    lineColor: "#228B22",
      	indexLabelFontSize: 16,
        indexLabelFontFamily: 'Garamond',
    xValueFormatString: "MMM, YYYY",
		dataPoints: [
		  { x: new Date(1993, 00, 01), y: -1.6 },
      { x: new Date(1993, 05, 01), y: 0.2},
      { x: new Date(1993, 11, 01), y: 3.2 },
      { x: new Date(1994, 00, 01), y: 2.9 },
      { x: new Date(1994, 05, 01), y: 2.4 },
      { x: new Date(1994, 11, 01), y: 4 },
      { x: new Date(1995, 00, 01), y: 2.3 },
      { x: new Date(1995, 05, 01), y: 7.8 },
      { x: new Date(1995, 11, 01), y: 9.5 },
      { x: new Date(1996, 00, 01), y: 0.1 },
    	{ x: new Date(1996, 05, 01), y: 13.9 },
			{ x: new Date(1996, 11, 01), y: 7.6 },
      { x: new Date(1997, 00, 01), y: 10.8 },
      { x: new Date(1997, 05, 01), y: 14.8},
      { x: new Date(1997, 11, 01), y: 12.5},
      { x: new Date(1998, 00, 01), y: 20.8 },
      { x: new Date(1998, 05, 01), y: 19.4},
      { x: new Date(1998, 11, 01), y: 21.5},
      { x: new Date(1999, 00, 01), y: 22.7 },
      { x: new Date(1999, 05, 01), y: 20.6},
      { x: new Date(1999, 11, 01), y: 28.8},
      { x: new Date(2000, 00, 01), y: 22.4},
      { x: new Date(2000, 05, 01), y: 26.7},
      { x: new Date(2000, 11, 01), y: 25.7 },
      { x: new Date(2001, 00, 01), y: 26.9 },
      { x: new Date(2001, 05, 01), y: 28.9 },
      { x: new Date(2001, 11, 01), y: 26.6 },
      { x: new Date(2002, 00, 01), y: 32.2 },
      { x: new Date(2002, 05, 01), y: 31.1 },
      { x: new Date(2002, 11, 01), y: 33.1 },
      { x: new Date(2003, 00, 01), y: 34.5 },
      { x: new Date(2003, 05, 01), y: 33.3 },
      { x: new Date(2003, 11, 01), y: 35.2 },
      { x: new Date(2004, 00, 01), y: 39.1 },
      { x: new Date(2004, 05, 01), y: 36.7 },
      { x: new Date(2004, 11, 01), y: 39.2 },
      { x: new Date(2005, 00, 01), y: 38.1 },
      { x: new Date(2005, 05, 01), y: 41.9 },
      { x: new Date(2005, 11, 01), y: 44.7 },
      { x: new Date(2006, 00, 01), y: 40.1 },
      { x: new Date(2006, 05, 01), y: 44 },
      { x: new Date(2006, 11, 01), y: 43.5 },
      { x: new Date(2007, 00, 01), y: 40.5 },
      { x: new Date(2007, 05, 01), y: 43.5},
      { x: new Date(2007, 11, 01), y: 42.8},
      { x: new Date(2008, 00, 01), y: 46.2 },
      { x: new Date(2008, 05, 01), y: 49.8},
      { x: new Date(2008, 11, 01), y: 49.6 },
      { x: new Date(2009, 00, 01), y: 51.1 },
      { x: new Date(2009, 05, 01), y: 54.3 },
      { x: new Date(2009, 11, 01), y: 55.7 },
      { x: new Date(2010, 00, 01), y: 52.5 },
      { x: new Date(2010, 05, 01), y: 60.5 },
      { x: new Date(2010, 11, 01), y: 53.1 },
      { x: new Date(2011, 00, 01), y: 52.1 },
      { x: new Date(2011, 05, 01), y: 57.4},
      { x: new Date(2011, 11, 01), y: 59.3 },
      { x: new Date(2012, 00, 01), y: 63.8 },
      { x: new Date(2012, 05, 01), y: 66.9},
      { x: new Date(2012, 11, 01), y: 69.1 },
      { x: new Date(2013, 00, 01), y: 70.2 },
      { x: new Date(2013, 05, 01), y: 67.8},
      { x: new Date(2013, 11, 01), y: 66.9 },
      { x: new Date(2014, 00, 01), y: 69 },
      { x: new Date(2014, 05, 01), y: 71.9 },
      { x: new Date(2014, 11, 01), y: 76, indexLabel: "\u2191 highest",markerColor: "red", markerType: "circle" },
		]
	}]
});
chart.render();
chart2.render();
chart3.render();
}