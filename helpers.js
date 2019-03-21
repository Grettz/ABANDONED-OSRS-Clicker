//Calculate exp required for next level
function nextLvlExp(curLvl) {
    //OSRS Exp Formula
    let result = [curLvl + 300 * Math.pow(2, (curLvl) / 7)] / 4;
    result = Math.floor(result + 0.000001);
    return result;
};

function cumulLevelExp(level) {
    if (level>1) {
        let exp = 0;
        for (i=1; i<level; i++) {
            exp += nextLvlExp(i);
            console.log(nextLvlExp(i)+", "+exp);
        }
    } else {
        return 0;
    }
}

function levelFromExp(exp) {
    let level = 1;
    while (exp >= nextLvlExp(level)) {
        exp -= nextLvlExp(level);
        level++;
    }
    return level;
}

function levelExpFromExp(exp) {
    let level = 1;
    while (exp >= nextLvlExp(level)) {
        exp -= nextLvlExp(level);
        level++;
    }
    return exp;
}

function firstLetterToUppercase(str) {
    return str[0].toUppperCase() + str.Slice(1);
};

//Return item amount to drop
function getDropAmount(max) {
    return Math.round(Math.random() * max);
};

function copyArray(arr) {
    if (arr === undefined) {
        return arr;
    }
    return JSON.parse(JSON.stringify(arr));
}