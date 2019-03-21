let actions = {
    skillAction: function (skillId, action) {
        var skill = skills[skillId];
        $(".action-button").addClass("cusDisabled");

        $("#action-progress").animate({
            width: "100%",
        }, {
            duration: action.time,
            easing: "linear",
            done: function () {
                let playerSkill = player.skills[skillId];
                $(this).css("width", "0%");
            $(".action-button").removeClass("cusDisabled");
                skill.actionActive = false;

                while (playerSkill.levelExp + action.expGain >= nextLvlExp(playerSkill.level)){
                    playerSkill.levelExp -= nextLvlExp(playerSkill.level);
                    playerSkill.level += 1;
                    console.log("Level Up!");
                }
                playerSkill.exp += action.expGain;
                playerSkill.levelExp += action.expGain;
                console.log(playerSkill.exp + ", " + playerSkill.levelExp + ", " + action.expGain + ", " + nextLvlExp(playerSkill.level));
            }
        });
    },
};

function equipItem(item) {
    if (item.equipable) {
        if (!player.equipment[item.type]) {
            console.log(player.equipment[item.type]);
        }
    } else {
        console.log("Item Not equipable!");
    }
}

function unequipItem(item) {

}

function addItemToInv(item) {

}

function removeItemFromInv(item) {

}