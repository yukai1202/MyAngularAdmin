eegAdmin.
directive('bindChart', function() {
    return {
        restrict: 'AE',
        link: function(scope, element, attrs) {
            	//setTimeout(function(){

            	/*var a1 = [[1,10],[2,20]];
            	var a2 = [[3,20],[4,5]];
            	var a3 = [[4,30],[1,40]];
            	var a4 = [[5,20],[12,12]];
            	var test2 = [a1,a2,a3,a4];
            	targetPlot = $.jqplot('chart1', test2, {
				    seriesDefaults:{ showMarker: false },
				    cursor:{
				      	show: true,
				      	zoom:true,
				      	showTooltip:false
				    },
				    legend:{
				      	location:'nw'
				    },
				    axesDefaults: {
				    	show: false 
				    },
				    axes:{
				    	xaxis:{
	                      	tickRenderer: $.jqplot.CanvasAxisTickRenderer,
	                      	show: true
	                    }

				    },
				    textColor:"#ff0000",
   					grid:{shadow:false, borderWidth:1.0} 
			       
			  	}); 
			   
			  	controllerPlot = $.jqplot('chart2', [[[]]], {
				    seriesDefaults:{ showMarker: false },
				    series:[
				    ],
				    cursor:{
					    show: true,
					    showTooltip: false,
					    zoom:true,
					    constrainZoomTo: 'x'
				    },
				    axesDefaults: {
					   showTickMarks:false
					},
				    axes:{
				    	xaxis:{
				    		  min:0,
				    		  max:5,
		                      tickRenderer: $.jqplot.CanvasAxisTickRenderer,
		                      show: true
		                    }

				    },
				    textColor:"#ff0000",
   					grid:{shadow:false}
			  	});
			   
			  	$.jqplot.Cursor.zoomProxy(targetPlot, controllerPlot);
			     
			  	$.jqplot._noToImageButton = true;*/
			  	/*var arr = [
	                {horizontalLine: {
	                    name: 'barney',
	                    y: 4,
	                    lineWidth: 6,
	                    color: 'rgb(100, 55, 124)',
	                    shadow: false
	                }}
	            ];*/
			   	/*scope.initload = function(){
			   		targetPlot = $.jqplot('chart1', [test], {
					    seriesDefaults:{ showMarker: false },
					    series:[
					      {label:'P In'},
					      {label:'P Out', yaxis:'y2axis'},
					      {label:'RPM', yaxis:'y3axis'},
					    ],
					    cursor:{
					      show: true,
					      zoom:true,
					      showTooltip:false
					    },
					    legend:{
					      location:'nw',
					      xoffset: 270,
					      yoffset: 100
					    },
					    axesDefaults: { 
					      useSeriesColor:true, 
					      rendererOptions: {
					        alignTicks: true
					      } 
					    } 
					       
					  }); 
					   
					controllerPlot = $.jqplot('chart2', [test], {
					    seriesDefaults:{ showMarker: false },
					    series:[
					      {label:'P In'},
					      {label:'P Out', yaxis:'y2axis'},
					      {label:'RPM', yaxis:'y3axis'},
					    ],
					    cursor:{
					      show: true,
					      showTooltip: false,
					      zoom:true,
					      constrainZoomTo: 'x'
					    },
					    axesDefaults: { 
					      useSeriesColor:true, 
					      rendererOptions: {
					        alignTicks: true
					      } 
					    }
					  });

					  scope.targetPlot = targetPlot;
					  scope.controllerPlot = controllerPlot;
			   	}
			   	scope.initload();
			  	$.jqplot.Cursor.zoomProxy(targetPlot, controllerPlot);
			     
			  	$.jqplot._noToImageButton = true;*/


			//OutPr

			scope.arr = [test];

			scope.renderChart = function(){
				scope.plot = $.jqplot("chart1", test3, {
                    seriesDefaults: {
                        showMarker: false
                    },
                    series: {
                        lines: {
                            show: true,
                            lineWidth: 2,
                        } 
                    },
                    axes: {
                        xaxis: {
                            
                        },
                        yaxis: {
                            /*min:0,
                            max:42*/
                        }
                    },
                    cursor: {
                        show: true,
                        zoom: true
                    }
                });

			};
			

			scope.renderChart();

			scope.startX = null;
			scope.startY = null;

			scope.finalX = null;
			scope.finalY = null;

			$('#chart2').mousedown(function(e){
			  	var mouseX = e.pageX - this.offsetLeft;
			  	var mouseY = e.pageY - this.offsetTop;
			 	console.log(mouseX+'   '+mouseY);
			  	scope.paint = true;
			  	
			  	scope.startX = e.offsetX;
			  	scope.startY = e.offsetY;
			});

			var ch = document.getElementById("chart2");

			scope.context = ch.getContext("2d");
			$('#chart2').mousemove(function(e){
			  	if(scope.paint){//是不是按下了鼠标
			  		var x1 = e.pageX - this.offsetLeft-268;
			  		var x2 = e.pageY - this.offsetTop;


			  		var a1 = e.offsetX;
			  		var a2 = e.offsetY;
			  		
			  		scope.finalX = a1;
			  		scope.finalY = a2;

			  	}
			});


			$('#chart2').mouseleave(function(e){
			  	scope.paint = false;
			  	//alert("leave");
			  	scope.startX = null;
			  	scope.startY = null;

			  	scope.finalX = null;
			  	scope.finalY = null;
			});

			$('#chart2').mouseup(function(e){
			  	scope.paint = false;



			});



		  	scope.test1 = function(){

		  		//[[0.0,1788.1],[10.0,1803.3],[20.0,1807.3]];
		  		/*var plot = scope.plot;
		  		//plot.data.push(OutPr);
		  		plot.series.push(plot.series[0]);
		  		console.log(plot);*/
		  		//plot.redraw(true);
		  		//plot.replot();

		  		if (scope.plot) {
				    scope.plot.destroy();
				}
				var test = [[10,1788],[30, 1788],[40, 1788]];
				scope.arr.push(test);
				scope.renderChart();

		  	};

		  	scope.test2 = function(){

		  	}

        }
    }
})
.directive("singleChart", function(){
	return {
        restrict: 'AE',
        link: function(scope, element, attrs) {
            $.jqplot('chart1', [
		            [1000.94,1000.79,1000.26,1000.67,1000.59,1000.53,1000.82,1000.42,1000.29,1000.78],
		            [132.19,2.99,6.09,50.38,1.44,4.41,25.25,3.37,68.60,2.14],
		            [1.19,2.99,6.09,3.38,1.44,4.41,4.25,3.37,5.60,2.14]
		        ], {
		        seriesDefaults : {
		            
		        },  
		        legend : {
		            show : true,
		            placement : 'outsideGrid'
		        },                  

		        axes : {                 
		            xaxis : {
		                renderer : $.jqplot.CategoryAxisRenderer,
		                tickOptions : {
		                  angle : 45    
		                },
		                ticks : ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
		            },
		            yaxis : {
		                label : 'axis1',
		                renderer : $.jqplot.LogAxisRenderer                        
		            },
		            y2axis : {
		                label : 'axis2'                      
		            }
		        },
		        series : [{
		            yaxis : 'yaxis',
		            label : 'dataForAxis1'
		        }, {
		            yaxis : 'y2axis',
		            label : 'dataForAxis2'
		        }]
		    });
        }
    }
});