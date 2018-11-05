window.onload = function(){
var puzzlearea = $("#puzzlearea");
var c = puzzlearea.children();
let x_axis = 0;
let y_axis =0;
let count = 0;
//c[0].classList.add("puzzlepiece");

for(var i=0; i<c.length ;i++){
	c[i].classList.add("puzzlepiece");
	c[i].style.top = y_axis+"px";
	c[i].style.left = x_axis+"px";

	x_axis+=100;
	count++;

	if(count%4==0){
		y_axis+=100;
		x_axis =0;
	}
}

}