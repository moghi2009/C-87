var canvas = new fabric.Canvas('myCanvas');
var blockImage_width = 30;
var blockImage_height = 30;
var player_x = 10;
var player_y = 10;
var player_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}

function new_Image(getImg) {
    fabric.Image.fromURL(getImg, function (Img) {
        block_object = Img;
        block_object.scaleToWidth(blockImage_width);
        block_object.scaleToHeight(blockImage_height);
        block_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_object);
    });
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    var keyPressed = e.keyCode;

    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == '80'){
        console.log("P and Shift pressed together");
        blockImage_height = blockImage_height + 10;
        blockImage_width = blockImage_width + 10;
        document.getElementById("current-width").innerHTML = blockImage_width;
        document.getElementById("current-height").innerHTML = blockImage_height;
    }

    if (e.shiftKey == true && keyPressed == '77'){
        console.log("M and Shift pressed together");
        blockImage_height = blockImage_height - 10;
        blockImage_width = blockImage_width - 10;
        document.getElementById("current-width").innerHTML = blockImage_width;
        document.getElementById("current-height").innerHTML = blockImage_height;
    }

    if(keyPressed == '38'){
        up();
        console.log("UP");
    }

    if(keyPressed == '40'){
        down();
        console.log("DOWN");
    }

    if(keyPressed == '37'){
        left();
        console.log("LEFT");
    }

    if(keyPressed == '39'){
        right();
        console.log("RIGHT");
    }

    if(keyPressed == '87'){
        new_Image("wall.jpg");
        console.log("Wall - W");
    }

    if(keyPressed == '71'){
        new_Image("ground.png");
        console.log("Ground - G");
    }

    if(keyPressed == '76'){
        new_Image("light_green.png");
        console.log("Light_Green - L");
    }

    if(keyPressed == '84'){
        new_Image("trunk.jpg");
        console.log("Trunk - T");
    }

    if(keyPressed == '82'){
        new_Image("roof.jpg");
        console.log("Roof - R");
    }

    if(keyPressed == '89'){
        new_Image("yellow_wall.jpg");
        console.log("Yellow Wall - Y");
    }

    if(keyPressed == '68'){
        new_Image("dark_green.png");
        console.log("Dark Green - D");
    }

    if(keyPressed == '85'){
        new_Image("unique.png");
        console.log("Unique - U");
    }

    if(keyPressed == '67'){
        new_Image("cloud.jpg");
        console.log("Cloud - C");
    }
}

function up(){
    if (player_y >= 0){
        player_y = player_y - blockImage_height;
        console.log("block Image Height" + blockImage_height);
        console.log("When up arrow is pressed Player X = " + player_x + "Player Y" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if (player_y <= 600){
        player_y = player_y + blockImage_height;
        console.log("block Image Height" + blockImage_height);
        console.log("When down arrow is pressed Player X = " + player_x + "Player Y" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if (player_x <= 1000){
        player_x = player_x + blockImage_width;
        console.log("block Image Width" + blockImage_width);
        console.log("When right arrow is pressed Player X = " + player_x + "Player Y" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if (player_x >= 0){
        player_x = player_x - blockImage_width;
        console.log("block Image Width" + blockImage_width);
        console.log("When left arrow is pressed Player X = " + player_x + "Player Y" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}