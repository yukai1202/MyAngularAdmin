eegAdmin.
directive('bindChart', function() {
    return {
        restrict: 'AE',
        link: function(scope, element, attrs) {
            //setTimeout(function(){
            	targetPlot = $.jqplot('chart1', [test], {
				    seriesDefaults:{ showMarker: false },
				    cursor:{
				      	show: true,
				      	zoom:true,
				      	showTooltip:false
				    },
				    legend:{
				      	location:'nw'
				    },
				    /*axesDefaults: {
				    	show:false,
				    	ticks: [0,10,20,30,40,50,60,70,80,90,100],
				    },*/
				    axes:{
				    	yaxis:{min:-100, max:100,pad:0},
				    	xaxis:{min:0, max:100,pad:0}

				    },
				    textColor:"#ff0000",
   					grid:{shadow:false, borderWidth:1.0}
			       
			  	}); 
			   
			  	controllerPlot = $.jqplot('chart2', [test], {
				    seriesDefaults:{ showMarker: false },
				    series:[
				    ],
				    cursor:{
					    show: true,
					    showTooltip: false,
					    zoom:true,
					    constrainZoomTo: 'x'
				    },
				    /*axesDefaults: {
				    	show:false,
				    	ticks: [0,10,20,30,40,50,60,70,80,90,100],
				    },*/
				    axes:{
				    	yaxis:{min:-100, max:100,pad:0},
				    	xaxis:{min:0, max:100,pad:0}

				    },
				    textColor:"#ff0000",
   					grid:{shadow:false, borderWidth:1.0}
			  	});
			   
			  	$.jqplot.Cursor.zoomProxy(targetPlot, controllerPlot);
			     
			  	$.jqplot._noToImageButton = true;
	            //}.bind(this),2000);
        }
    }
});
