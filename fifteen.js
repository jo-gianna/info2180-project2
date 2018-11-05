window.onload = function(){
	const puzzlearea = $("#puzzlearea");
	const c = puzzlearea.children();
	let x_axis = 0;
	let y_axis =0;
	let count = 0;
	var i; //declares loop variable to be used in all loops
	var bx_axis = 300;
	var by_axis = 300;

	var sLeft = new Array();
	var sTop = new Array();

	var shuffleButton = $("shuffleButton");

	for(i=0; i<c.length ;i++){
		
		c[i].classList.add("puzzlepiece");
  	    c[i].style.backgroundPosition = x_axis*-1 + "px " + y_axis*-1 +"px";

		c[i].style.top = y_axis+"px";
		sTop.push(c[i].style.top);
		c[i].style.left = x_axis+"px";
		sLeft.push(c[i].style.left);

		(function(){
			var position = i;
			c[i].addEventListener("click", function(){move(position);}, false);
			c[i].addEventListener("mouseover", function(){isMovable(position);}, false);
		}());
		x_axis+=100;
		count++;

		if(count%4==0){
			y_axis+=100;
			x_axis =0;
		}
	
	}

	shuffleButton.addEventListener("click",function(){shuffle();},false);

	function move(tile_num){
		//console.log(tile_num);
		if (isMovable(tile_num)){
			var tempx = bx_axis;
			var tempy = by_axis;
			//console.log(tile_num);
			bx_axis = c[tile_num].style.left;
			by_axis = c[tile_num].style.top;
			c[tile_num].style.left = tempx+"px";
			c[tile_num].style.top = tempy+"px";
			for(var i=0;i<c.length;i++){
				c[i].classList.remove('movablepiece');
			}
		}

	}

	function isMovable(tile_num){
		var f_bx_axis=bx_axis+"px";
		var f_by_axis=by_axis+"px";
		if(c[tile_num].style.left==f_bx_axis || c[tile_num].style.top==f_by_axis){
			if(Math.abs(f_bx_axis.substring(0,f_bx_axis.length-2) - (c[tile_num].style.left.substring(0,c[tile_num].style.left.length-2)))==100 ||
		   	   Math.abs(f_by_axis.substring(0,f_by_axis.length-2) - (c[tile_num].style.top.substring(0,c[tile_num].style.top.length-2)))==100)
			{
				c[tile_num].classList.add('movablepiece');
				return true;
			}
		}

		
	}
	var validTiles = new Array();
	let tile = 0;
	function shuffle(){
		for (i=0; i<300; i++){
			for(var a=0; a<c.length; a++){
				if(isMovable){
					validTiles.push(a);
				}
			}
			tile=validTiles[Math.floor((Math.random()*validTiles.length)+0)];
			move(tile);
		}
		for(i=0; i<c.length; i++)
		{
			/*c[i].classList.add("puzzlepiece");
  	    	c[i].style.backgroundPosition = x_axis*-1 + "px " + y_axis*-1 +"px";*/
			c[i].style.backgroundImage = "url('background.jpg')";//reset image for unsolved puzzle
			c[i].style.borderColor = "black";//set border color to black
			c[i].style.backgroundSize = "400px 400px";// let image size and grid size be the same
			
		}
	}
	function isSolved(){
		for (i=0;i<c.length;i++){
			if(puzzleArea[i].style.left!=sLeft[i] || puzzleArea[i].style.top!=sop[i]){
				return false;
			}
		}
		return true;
	}
	shuffle();
}