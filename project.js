var dim = 16;

$(document).ready(function grid() {
    var grid = document.getElementById('grid');
    for(var x=1;x<dim+1;x++) {
        for(var c=1;c<dim+1;c++) {
            grid.appendChild(document.createElement('div')).className = "square";
        }
        grid.appendChild(document.createElement('br'));
    };
    $('div.square').hover(function(){
    	$(this).addClass('shade');
    });
    $('button').click(function changeDim() {
    	$('div').remove('.square');
    	$('br').remove();
	    dim = prompt("How many squares would you like on each side of your grid? Choose a whole-number value between 1 and 200.");
	    if(isNaN(dim)===true) {
	    	alert("Not a valid input. Please reload the page and try again.");
	    } else if(dim<1 || dim>200) {
	    	alert("Not a valid input. Please reload the page and try again.");
	    } else if(dim%1!=0) {
	    	alert("Not a valid input. Please reload the page and try again.");
	    } else {
	    	$(document).ready(function newGrid() {
	    		dim = dim/1;
	    		for(var i=1;i<dim+1;i++) {
		        	for(var j=1;j<dim+1;j++) {
		            	grid.appendChild(document.createElement('div')).className = "square";
		        	}
		        	grid.appendChild(document.createElement('br'));
		        };
		        $(".square").height(Math.floor((600-2*dim)/dim));
		        $(".square").width(Math.floor((600-2*dim)/dim));
		    });
		    $('div.square').hover(function(){
    			$(this).addClass('shade');
    		});
	    };
	});
});