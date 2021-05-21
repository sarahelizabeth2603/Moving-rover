var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var mars_img_array=["mars.jpg", "nasa_image_1.jpg", "nasa_image_2.jpg", "nasa_image_3.jpg", "nasa_image_4.jpg", "nasa_image_5.jpg", "nasa_image_6.jpg"];

var random_number=Math.floor(Math.random()*7);


var background_image=mars_img_array[random_number];
var rover_image="rover.png";
var rover_width=100 ;
var rover_height=90;
var rover_x=10;
var rover_y=10;


function add(){
     background_imgTag=new Image();
    background_imgTag.onload=uploadbackground;
    background_imgTag.src=background_image;

     rover_imgTag=new Image();
    rover_imgTag.onload=uploadRover;
    rover_imgTag.src=rover_image;
}

function uploadbackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);

}

function uploadRover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_Keydown);

function my_Keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);

    if(keypressed == "40"){
        down();
        console.log("down");
    }

    if( keypressed == "38"){
        up();
        console.log("up");
   }


   if( keypressed == "39"){
    right();
    console.log("right");
}


if( keypressed == "37"){
    left();
    console.log("left");
}
}

function up(){
    if(rover_y>=0){
       rover_y=rover_y-10;
       console.log("When up arrow is pressed , x = "+rover_x+" y = "+rover_y);
       uploadbackground();
       uploadRover();
    }
}

function down(){
    if(rover_y<=500){
        rover_y=rover_y+10;
        console.log("when down arrow is pressed , x = "+rover_x+"y = "+rover_y);
        uploadbackground();
        uploadRover();
    }
}

function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        console.log("when left arrow is pressed , x  =  "+rover_x + " y =" + rover_y);
        uploadbackground();
        uploadRover();

    }
}

function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        console.log("When right arrow is pressed , x = "+ rover_x + " y = "+ rover_y);
         uploadbackground();
         uploadRover();

    }
}