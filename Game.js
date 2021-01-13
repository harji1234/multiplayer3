class Game{
constructor(){


}
getState() {
    var gameStateRef=database.ref('gameState')
    gameStateRef.on('value',function(data){
        gameState=data.val()
    })
}
update(state) {
database.ref('/').update({
    gameState:state
}) 


}
async start() {
    if(gameState===0) {
        player = new Player();
        var playerCountRef=await database.ref('playerCount').once("value")
        if(playerCountRef.exists()) {
            playerCount=playerCountRef.val()
            player.getCount()
        }
        
        form = new Form();
        form.display()
    }
    car1=createSprite(displayWidth/2-100,displayHeight/2)
    car2=createSprite(displayWidth/2+100,displayHeight/2)
    cars=[car1,car2]

}
play() {
form.hide()
text("game start",100,100)
Player.getPlayerInfo()
if(allPlayers!==undefined) {
var position=130
var index=0
var x=0
var y=0
for(var plr in allPlayers) {
    index=index+1
    x=x+200
    y=displayHeight-allPlayers[plr].distance
    cars[index-1].x=x
    cars[index-1].y=y
    if(plr==="player"+player.index) {
        //fill("red")
        cars[index-1].shapeColor="red"
        camera.position.x=displayWidth/2
        camera.position.y=cars[index-1].y
    }
    //else{
        //fill("black")
        //cars[index-1].shapeColor="black"
    //}
    position+=20
    text(allPlayers[plr].name+"="+allPlayers[plr].distance,130,position)
}
}
if(keyDown(UP_ARROW)&&player.index!==null) {
    player.distance=player.distance+20
    player.update();

}
drawSprites()
}
}