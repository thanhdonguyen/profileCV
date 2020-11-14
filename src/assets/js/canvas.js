var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
// alert('it works');
// context.moveTo(0, 0);
// context.lineTo(50, 50);
// context.lineTo(0,50);
// context.stroke();

// context.moveTo(0,70);
// context.lineTo(70,70);
// context.stroke();

// context.strokeStyle = '#ff0000'
// context.rect(0,100,100,50);
// context.stroke();

// context.stroke();
// context.fill();

// context.beginPath();
// context.rect(0, 0, 100, 50);
// context.stroke();
// context.closePath();

// context.beginPath();
// context.moveTo(200, 150);
// context.arc(150, 150, 50, 0, Math.PI*2);
// context.strokeStyle = 'red'
// context.stroke();
// context.closePath();

// context.beginPath();
// context.arc(300,300,50,0, Math.PI*2);
// context.stroke();
// context.fill();
// context.closePath();

var x =20, y=20;
var dx = 5,dy = 2;
var radius = 20;
document.addEventListener('keyup', function(event){
	console.log('KEY UP');
	console.log(event);
});
document.addEventListener('keydown', function(event){
	console.log('KEY DOWN');
	console.log(e)
});

function drawBall(){
	context.beginPath();
	context.arc(x,y,20,0,Math.PI*2);
	context.fillStyle = 'black';
	context.fill();
	context.closePath();
}
// setInterval(function(){
// 	context.clearRect(0,0,canvas.width,canvas.height);
// 	drawBall();
// 	x += 2;
// 	y += 2;
// },200);
function handleBallCollideBounds(){
	if(x<radius||x>canvas.width-radius){
		dx = -dx;
	}
	if(y<radius||y>canvas.height-radius){
		dy = -dy;
	}
}
function updateBallPosition(){
	x += dx;
	y += dy;
}
function draw() {
	context.clearRect(0,0,canvas.width,canvas.height);
	drawBall();
	handleBallCollideBounds();
	updateBallPosition();
	
	requestAnimationFrame(draw);
	
}

draw();
