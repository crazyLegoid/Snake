const scl = 20;
var snake;
var food;

function setup(){

    createCanvas(400, 400);
    frameRate(10);
    snake = new Snake(200, 200);
    pickL();

    
}

function pickL(){

    var col = floor(width/scl);
    var rows = floor(height/scl);
    food = createVector(floor(random(col)), floor(random(rows)));
    food.mult(scl);

}

function draw(){

    background(0);
    snake.display();
    snake.update();
    snake.mouseControl();
    snake.death();

    if(snake.eat(food)){

        pickL();

    }

    fill("purple");
    rect(food.x, food.y, scl, scl);

}

