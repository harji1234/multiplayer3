var gameState = 0;
var playerCount = 0;
var form;
var game, player;
var database;
var allPlayers
var car1,car2,cars


function setup() {
createCanvas(displayWidth-20,displayHeight-20);
database = firebase.database();
game = new Game()
game.getState()
game.start()
}
function draw () {
if(playerCount===2) {
    game.update(1)
}
if(gameState===1) {
    clear()
    game.play()
}

}



