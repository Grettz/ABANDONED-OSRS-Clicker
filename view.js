let activeScreen = "";

let view = {
    updating: {
        update: function(){
            //Compare prevState and update whats changed
            view.updating.skillScreen.tempUpdate();

            view.updating.saveCurrentState();
        },
        skillScreen: {
            initialize: function(skillId){
                //Set title
                $('#title-bar #title').text(skillId);
                //Set lvl & exp
                let skill = skills[skillId];
                $("#cur-level").text(skill.level);
                $("#cur-exp").text(skill.exp);
                $("#next-level-exp").text(nextLvlExp(skill.level));
                activeScreen = skillId;
            },
            template1: function(skill){

            },
            //template2...
            tempUpdate: function(){
                $("#cur-level").text(skills.mining.level);
                $("#cur-exp").text(skills.mining.levelExp);
                $("#next-level-exp").text(nextLvlExp(skills.mining.level));
                console.log(skills.mining.levelExp / nextLvlExp(skills.mining.level) * 100 + "%");
            },
        },
        saveCurrentState: function(){
            // prevState = copyArray(skills);
            // console.log(prevState);
        },
    },
};