class Form{
    constructor() {
    this.input=createInput()
    this.button=createButton("start")
    this.greeting = createElement('h2')
    this.title = createElement('h1')
    this.reset=createButton("RESET")
    }
    hide(){
        this.input.hide()
        this.button.hide()
        this.title.hide()
        this.greeting.hide()
        
    }
    display() {
    
        this.input.position(displayWidth/2-40,displayHeight/2-40) 
        
        this.button.position(displayWidth/2+10,displayHeight/2)

        this.reset.position(displayWidth-100,40)

        this.title.html("Car Racing Game")
        this.title.position(displayWidth/2-90,100)
       
            this.button.mousePressed(()=>{

            this.input.hide()
            this.button.hide()
            player.name = this.input.value()
            playerCount=playerCount+1
            player.index=playerCount
            player.update();
            player.updateCount(playerCount)
            this.greeting.html("hello"+player.name)
            this.greeting.position(130,150)
            
        })
        this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
        })

    }
    
}