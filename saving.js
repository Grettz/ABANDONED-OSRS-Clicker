function saveGame() {
    localStorage.setItem("OSRSClicker", JSON.stringify(player));
    console.log("Saved Game!");
};

function loadGame() {
    if (window.localStorage["OSRSClicker"]) {
        player = JSON.parse(localStorage.getItem("OSRSClicker"));
        console.log("Save Loaded!");
    }
};

function clearSave() {
    if (window.localStorage["OSRSClicker"]) {
        localStorage.removeItem("OSRSClicker");
        console.log("Save Cleared!");
    }
}