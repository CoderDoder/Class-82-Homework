canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="cyan";
line=3;
mouse_event="";
var last_position_x,last_position_y;


canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
console.log(e);
color=document.getElementById("color").value;
line=document.getElementById("line_width").value;
radius=document.getElementById("radius").value;
mouse_event="mouseDown";

}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    console.log(e);
    current_position_x=e.clientX-canvas.offsetLeft;
    current_position_y=e.clientY-canvas.offsetTop;
    if(mouse_event=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=line;
        console.log("current x and y positions are : "+current_position_x +" and "+current_position_y);
        console.log("last x and y positions was : "+last_position_x +" and "+last_position_y);
        ctx.arc(current_position_x,current_position_y,radius,0,2*Math.PI);
        ctx.stroke();


    }
    last_position_x=current_position_x;
    last_position_y=current_position_y;


}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    console.log(e);
    mouse_event="mouseUP";
    

}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    console.log(e);
    mouse_event="mouseleave";
    

}
function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}

