var mouseEvent="empty";
var last_position_of_x,last_position_of_y;
canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
color="black";
width_of_line=2;

canvas.addEventListener("mouseDown",mymousedown);
function mymousedown(e){
mouseEvent="mouseDown";
}
canvas.addEventListener("mouseUP",mymouseUP);
function mymouseUP(e){
mouseEvent="mouseUP";
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
current_position_of_mouse_y=e.clientY-canvas.offsetTop;

if(mouseEvent=="mouseDown"){
    ctx.beginPath();
    ctx.strokStyle=color;
    ctx.lineWidth=width_of_line;

    ctx.moveTo(last_position_of_x,last_position_of_y);
    ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
    ctx.stroke();
}
last_position_of_x=current_position_of_mouse_x;
last_position_of_y=current_position_of_mouse_y;
}