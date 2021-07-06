var hypnoticBall, database;
var position;


function setup(){
    database = firebase.database();


    createCanvas(500,500);

    hypnoticBall = createSprite(250,250,10,10);
    hypnoticBall.shapeColor = "red";


    var hypnoticBallPosition = database.ref('ball/position');
    hypnoticBallPosition.on("value",readPosition);

}

function draw(){
    background("white");

    if (position!==undefined){

    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }

    if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }

    if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }

    if(keyDown(DOWN_ARROW)){
        writePosition(0,1);
    }

    drawSprites();
}

}

function writePosition(x,y){
    database.ref('ball/position').set({
        'x' : position.x + x,
        'y' : position.y + y
    })
   
}

function readPosition(data){
    position = data.val();
    hypnoticBall.x = position.x;
    hypnoticBall.y = position.y;
}


//child/nodes

// .ref()  -  used to refer to the location of the database value we care about

// .on()  -  creates a listener which keeps listening to the changes in the database

