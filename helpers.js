//Calculate exp required for next level
function nextLvlExp(curLvl){
    //OSRS Exp Formula
    let result = [curLvl + 300 * Math.pow(2, (curLvl)/7)]/4;
    result = Math.floor(result + 0.000001);
    return result;
};

function firstLetterToUppercase(str){
    return str[0].toUppperCase() + str.Slice(1);
};

//Return item amount to drop
function getDropAmount(max){
    return Math.round(Math.random() * max);
};

function copyArray(arr) {
    if(arr === undefined) {
        return arr;
    }
    return JSON.parse(JSON.stringify(arr));
}