var ball;
var database

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    database = firebase.database();
    var ballsPosition = database.ref('ball/position');
    ballsPosition.on("value", readData)
    //readData();
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writeData(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writeData(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writeData(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writeData(0,+1);
    }
    drawSprites();
}

function readData(test){
       position = test.val();
       ball.x = position.x;
       ball.y = position.y;
}

function writeData(x, y){
    var dbref = database.ref('ball/position');
    dbref.set({
        'x' : position.x + x,
        'y' : position.y + y
    });
}