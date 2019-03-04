let gameSpeed = 1;
let bonusSpeed = 1;

let curTime = new Date();
let totalTime = 0;
let gameTicksLeft = 0;
let tickRate = 10;
let fpsRate = 10;
let sudoStop = false;
let prevState = {};

function tick() {
    if(sudoStop) {
        return;
    }
    let newTime = new Date();
    totalTime += newTime - curTime;
    gameTicksLeft += newTime - curTime;
    curTime = newTime;

    let didSomething = false; //for performance

    while(gameTicksLeft > (1000 / tickRate)) {
        
        didSomething = true;

        $.each(skills, function(){ //Skills tick
            this.tick();
        });

        gameTicksLeft -= 1000 / tickRate / gameSpeed / bonusSpeed;
    }
    if(didSomething){ //Update view
        view.updating.update();
    }
};


function startGame() {
    setInterval(tick, 1000 / tickRate);
};