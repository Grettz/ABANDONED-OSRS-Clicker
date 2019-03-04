//200m max exp per skill
maxExp = 200000000

let skills = {

    attack: {
        tick: function(){

        },
        screenLayout: "default", //TODO
        //TODO: effectiveLevel: 1,
        level: 1,
        maxLevel: 99,
        exp: 0,
        levelUp: function(){

        },
    },
    hitpoints: {
        tick: function(){

        },
        screenLayout: "default", //TODO
        //TODO: effectiveLevel: 1,
        level: 1,
        maxLevel: 99,
        exp: 0,
        levelUp: function(){

        },
    },
    mining: {
        screenLayout: "default", //TODO
        //TODO: effectiveLevel: 1,
        level: 1,
        maxLevel: 99,
        exp: 0,
        levelExp: 0,
        actionActive: false,
        actionTime: 0, //Action time remaining, in ms
        currentAction: "",
        actionName: "Mine",
        actions: {
            clay: {
                time: 100, //Action time, in ms
                reqLvl: 1,
                expGain: 10,
                //dropType: "single" or "individual"
                drops: [
                    {drop: "Clay", chance: 1, amount: 1},
                ],
            },
            copperOre: {
                time: 300, //Action time, in ms
                reqLvl: 1,
                expGain: 15,
                //dropType: "single" or "individual"
                drops: [
                    {drop: "Copper Ore", chance: 1, amount: 1},
                ],
            },
            tinOre: {
                time: 300, //Action time, in ms
                reqLvl: 1,
                expGain: 20,
                //dropType: "single" or "individual"
                drops: [
                    {drop: "Tin Ore", chance: 1, amount: 1},
                ],
            },
            runeEssence: {
                time: 200, //Action time, in ms
                reqLvl: 10,
                expGain: 50,
                //dropType: "single" or "individual"
                drops: [
                    {drop: "Rune Essence", chance: 1, amount: 1},
                ],
            },
        },
        tick: function(){
            this.actionUpdate();
            this.levelUp();

            console.log(this.actionTime);
        },
        actionUpdate: function(){
            if(this.actionActive){
                if(this.actionTime < (1000 / tickRate)){ //Action finished, last tick
                    this.actionTime = 0; 
                    // this.actionComplete();

                } else if(this.actionTime >= (1000 / tickRate)){ // >=1 tick remaining
                    this.actionTime -= (1000 / tickRate);

                } else {
                    //error...
                }
            }
        },
        // actionComplete: function(actionId){
        //     console.log(actionId);
        //     let action = this.actions[actionId];
        //     this.actionActive = false;
        //     console.log(action);
        //     console.log(action.expGain);
        //     this.exp += action.expGain;
        //     this.levelExp += action.expGain;
        //     $("#exp-progress").animate({
        //         width: skills.mining.levelExp / nextLvlExp(skills.mining.level) * 100 + "%",
        //     },{
        //         duration: 0.5,
        //     });
        //     $(".action-button").removeClass("cusDisabled");
        //     console.log("Action Complete!");

        //     this.levelUp(); //Check for level up
        // },
        levelUp: function(){
            if(this.levelExp >= nextLvlExp(this.level)){ //Level up
                this.levelExp -= nextLvlExp(this.level);
                this.level += 1;
            }
        },
    },
    strength: {
        tick: function(){

        },
        screenLayout: "default", //TODO
        //TODO: effectiveLevel: 1,
        level: 1,
        maxLevel: 99,
        exp: 0,
        levelUp: function(){
            
        },
    },
    agility: {
        tick: function(){

        },
        screenLayout: "default", //TODO
        //TODO: effectiveLevel: 1,
        level: 1,
        maxLevel: 99,
        exp: 0,
        levelUp: function(){
            
        },
    },
    smithing: {
        tick: function(){

        },
        screenLayout: "default", //TODO
        //TODO: effectiveLevel: 1,
        level: 1,
        maxLevel: 99,
        exp: 0,
        levelUp: function(){
            
        },
        initializeScreen: function(){
            console.log(this);
        },
    },
    defence: {
        tick: function(){

        },
        //Screen Templates: "default"
        screenLayout: "default", //TODO
        //TODO: effectiveLevel: 1,
        level: 1,
        maxLevel: 99,
        exp: 0,
        levelUp: function(){
            
        },
    },
    herblore: {
        tick: function(){

        },
        //Screen Templates: "default"
        screenLayout: "default", //TODO
        //TODO: effectiveLevel: 1,
        level: 1,
        maxLevel: 99,
        exp: 0,
        levelUp: function(){
            
        },
    },
    fishing: {
        tick: function(){

        },
        //Screen Templates: "default"
        screenLayout: "default", //TODO
        //TODO: effectiveLevel: 1,
        level: 1,
        maxLevel: 99,
        exp: 0,
        levelUp: function(){
            
        },
    },
    ranged: {
        tick: function(){

        },
        //Screen Templates: "default"
        screenLayout: "default", //TODO
        //TODO: effectiveLevel: 1,
        level: 1,
        maxLevel: 99,
        exp: 0,
        levelUp: function(){
            
        },
    },
    thieving: {
        tick: function(){

        },
        //Screen Templates: "default"
        screenLayout: "default", //TODO
        //TODO: effectiveLevel: 1,
        level: 1,
        maxLevel: 99,
        exp: 0,
        levelUp: function(){
            
        },
    },
    cooking: {
        tick: function(){

        },
        //Screen Templates: "default"
        screenLayout: "default", //TODO
        //TODO: effectiveLevel: 1,
        level: 1,
        maxLevel: 99,
        exp: 0,
        levelUp: function(){
            
        },
    },
    prayer: {
        tick: function(){

        },
        //Screen Templates: "default"
        screenLayout: "default", //TODO
        //TODO: effectiveLevel: 1,
        level: 1,
        maxLevel: 99,
        exp: 0,
        levelUp: function(){
            
        },
    },
    crafting: {
        tick: function(){

        },
        //Screen Templates: "default"
        screenLayout: "default", //TODO
        //TODO: effectiveLevel: 1,
        level: 1,
        maxLevel: 99,
        exp: 0,
        levelUp: function(){
            
        },
    },
    firemaking: {
        tick: function(){

        },
        //Screen Templates: "default"
        screenLayout: "default", //TODO
        //TODO: effectiveLevel: 1,
        level: 1,
        maxLevel: 99,
        exp: 0,
        levelUp: function(){
            
        },
    },
    magic: {
        tick: function(){

        },
        //Screen Templates: "default"
        screenLayout: "default", //TODO
        //TODO: effectiveLevel: 1,
        level: 1,
        maxLevel: 99,
        exp: 0,
        levelUp: function(){
            
        },
    },
    fletching: {
        tick: function(){

        },
        //Screen Templates: "default"
        screenLayout: "default", //TODO
        //TODO: effectiveLevel: 1,
        level: 1,
        maxLevel: 99,
        exp: 0,
        levelUp: function(){
            
        },
    },
    woodcutting: {
        tick: function(){

        },
        //Screen Templates: "default"
        screenLayout: "default", //TODO
        //TODO: effectiveLevel: 1,
        level: 1,
        maxLevel: 99,
        exp: 0,
        levelUp: function(){
            
        },
    },
    runecrafting: {
        tick: function(){

        },
        //Screen Templates: "default"
        screenLayout: "default", //TODO
        //TODO: effectiveLevel: 1,
        level: 1,
        maxLevel: 99,
        exp: 0,
        levelUp: function(){
            
        },
    },
    slayer: {
        tick: function(){

        },
        //Screen Templates: "default"
        screenLayout: "default", //TODO
        //TODO: effectiveLevel: 1,
        level: 1,
        maxLevel: 99,
        exp: 0,
        levelUp: function(){
            
        },
    },
    farming: {
        tick: function(){

        },
        //Screen Templates: "default"
        screenLayout: "default", //TODO
        //TODO: effectiveLevel: 1,
        level: 1,
        maxLevel: 99,
        exp: 0,
        levelUp: function(){
            
        },
    },
    construction: {
        tick: function(){

        },
        //Screen Templates: "default"
        screenLayout: "default", //TODO
        //TODO: effectiveLevel: 1,
        level: 1,
        maxLevel: 99,
        exp: 0,
        levelUp: function(){
            
        },
    },
    hunter: {
        tick: function(){

        },
        //Screen Templates: "default"
        screenLayout: "default", //TODO
        //TODO: effectiveLevel: 1,
        level: 1,
        maxLevel: 99,
        exp: 0,
        levelUp: function(){
            
        },
    },
};