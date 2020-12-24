var database;
var player, form, game, playerCount
var gameState = 0;
var players
var distance = 0;
var car1, car2, car3, car4, cars
function setup(){
    database = firebase.database()
    createCanvas(displayWidth,displayHeight);  
    game = new Game()
    game.getState()
    game.start()
}

function draw(){
    if (playerCount === 4){
        game.updateState(1)
    }
    if (gameState === 1){
        clear()
        game.play()
    }
}


