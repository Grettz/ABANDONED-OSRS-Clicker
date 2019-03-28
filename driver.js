let gameSpeed = 1;
let bonusSpeed = 1;

let curTime = new Date();
let totalTime = 0;
let gameTicksLeft = 0;
let tickRate = 10;
let fpsRate = 10;
let prevState = {};

function tick() {
    let newTime = new Date();
    totalTime += newTime - curTime;
    gameTicksLeft += newTime - curTime;
    curTime = newTime;

    let didSomething = false;

    while(gameTicksLeft > (1000 / tickRate)) {

        didSomething = true;

        //Check skills for level up
        $.each(player.skills, function(){
            if (this.levelExp >= nextLvlExp(this.level)) {
                // levelUpSkill(this); make this a function
                this.level += 1;
                console.log(this.level);
            }
        });
        gameTicksLeft -= 1000 / tickRate / gameSpeed / bonusSpeed;
    }

    if(didSomething){
        view.updating.update();
    }
};


function startGame() {
    loadGame();
    
    view.updating.initiate();

    setInterval(tick, 1000 / tickRate);
};