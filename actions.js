let actions = {
    skillAction: function (skillId, action) {
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

                //Level up
                while (playerSkill.levelExp + action.expGain >= nextLvlExp(playerSkill.level)){
                    playerSkill.levelExp -= nextLvlExp(playerSkill.level);
                    playerSkill.level += 1;
                    console.log("Level Up!");
                }
                //Add exp
                playerSkill.exp += action.expGain;
                playerSkill.levelExp += action.expGain;

                //Calc item drops
                $.each(action.drops, function(){
                    if(Math.random() <= this.chance) {
                        addItemToInv(this.name, this.amount);
                    }
                });
                
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