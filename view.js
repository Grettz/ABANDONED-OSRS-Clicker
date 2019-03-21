activeScreen = "";

let view = {
    updating: {
        update: function () {
            if ($("#skill-screen").is(":visible")) {
                view.updating.skillScreen.tempUpdate();
            }
            view.updating.saveCurrentState();
        },
        skillScreen: {
            initialize: function (skillId) {
                //Set active screen
                activeScreen = skillId;
                $("#skill-screen").css("display", "grid");

                let playerSkill = player.skills[activeScreen];

                $("#title-bar #title").text(skillId);
                $("#cur-level").text(playerSkill.level);
                $("#cur-exp").text(playerSkill.levelExp);
                $("#next-level-exp").text(nextLvlExp(playerSkill.level));
                $("#exp-progress").css("width", playerSkill.levelExp / nextLvlExp(playerSkill.level) * 100 + "%");

                //Highlight active skill button
                $(".skill").css("opacity", "");
                $("#skills-container #"+skillId).css("opacity", "0.1");
            },
            tempUpdate: function () {
                let playerSkill = player.skills[activeScreen];
                let prevSkill = prevState.skills[activeScreen];

                if (prevSkill.exp != playerSkill.exp){
                    $("#cur-level").text(playerSkill.level);
                    $("#cur-exp").text(playerSkill.levelExp);
                    $("#next-level-exp").text(nextLvlExp(playerSkill.level));
                    $("#exp-progress").stop().animate({width: playerSkill.levelExp / nextLvlExp(playerSkill.level) * 100 + "%"}, {duration: 500}); //Animate exp bar
                }
            },
            exit: function () {
                $("#skill-screen").css("display", "none"); //Hide screen
                $(".skill").css("opacity", ""); // Remove skill icon highlight
                activeScreen = "";
            },
        },
        saveCurrentState: function () {
            prevState = copyArray(player);
        },
    },
};