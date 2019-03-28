let player = {
    combatLevel: function () {
        let base = 0.25 * (skills.defence.level + skills.hitpoints.level + Math.floor(skills.prayer.level / 2));
        let melee = 0.325 * (skills.attack.level + skills.strength.level);
        let ranged = 0.325 * (Math.floor(skills.ranged.level / 2) + skills.ranged.level);
        let magic = 0.325 * (Math.floor(skills.magic.level / 2) + skills.magic.level);
        console.log(base+", "+melee+", "+ranged+", "+magic+".");
        let max = Math.max(melee, ranged, magic);
        console.log(Math.floor(base + max));
    },
    exp: 0,
    levelExp: 0,
    equipment: {
        head: null,
        neck: null,
        body: null,
        legs: null,
        feet: null,
        cape: null,
        arrows: null,
        weapon: null,
        shield: null,
        hands: null,
        ring: null
    },
    inventory: {
        slot1: null, slot2: null, slot3: null, slot4: null,
        slot5: null, slot6: null, slot7: null, slot8: null,
        slot9: null, slot10: null, slot11: null, slot12: null,
        slot13: null, slot14: null, slot15: null, slot16: null,
        slot17: null, slot18: null, slot19: null, slot20: null,
        slot21: null, slot22: null, slot23: null, slot24: null,
        slot25: null, slot26: null, slot27: null, slot28: null,
    },
    bank: [],
    skills: {
        attack: {exp: 0, level: 1, levelExp: 0},
        hitpoints: {exp: 200000000, level: 3, levelExp: 0},
        mining: {exp: 0, level: 1, levelExp: 0},
        strength: {exp: 0, level: 1, levelExp: 0},
        agility: {exp: 0, level: 1, levelExp: 0},
        smithing: {exp: 0, level: 1, levelExp: 0},
        defence: {exp: 0, level: 1, levelExp: 0},
        herblore: {exp: 0, level: 1, levelExp: 0},
        fishing: {exp: 0, level: 1, levelExp: 0},
        ranged: {exp: 0, level: 1, levelExp: 0},
        thieving: {exp: 0, level: 1, levelExp: 0},
        cooking: {exp: 0, level: 1, levelExp: 0},
        prayer: {exp: 0, level: 1, levelExp: 0},
        crafting: {exp: 0, level: 1, levelExp: 0},
        firemaking: {exp: 0, level: 1, levelExp: 0},
        magic: {exp: 0, level: 1, levelExp: 0},
        fletching: {exp: 0, level: 1, levelExp: 0},
        woodcutting: {exp: 0, level: 1, levelExp: 0},
        runecrafting: {exp: 0, level: 1, levelExp: 0},
        slayer: {exp: 0, level: 1, levelExp: 0},
        farming: {exp: 0, level: 1, levelExp: 0},
        construction: {exp: 0, level: 1, levelExp: 0},
        hunter: {exp: 0, level: 1, levelExp: 0},
    }
}

function addItemToInv(itemName, qty) {
    //Get item object
    let item;
    $.each(items, function(){
        if(this.name == itemName) {
            item = this;
            return false;
        }
    });
    //Add to inv
    for(let i=0; i<qty; i++) {
        $.each(player.inventory, function(i){
            if(player.inventory[i] == null) {
                player.inventory[i] = item;
                console.log(item.name+" added to inventory!");
                return false;
            }
        });
    }
    view.updating.inventory.update();
}