$(document).ready(function () {

    //Sidebar Menu Click Response
    let menuTab = $("#sidebar-container .tab");

    //Change tab BG on click/active
    menuTab.click(function () {
        //Set class to selected to change tab background img
        menuTab.removeClass();
        menuTab.addClass("tab");
        menuTab.each(function () {
            $(this).addClass(this.id);
        });
        //Add selected to class name
        $(this).removeClass(this.id).addClass(this.id + "-selected");

        //Show selected sidebar panel
        let panels = $("#sidebar-panel .panel");
        panels.removeClass("hide").removeClass("show").addClass("hide");
        $("#" + this.id + "-panel").removeClass("hide").addClass("show");
    });


    //Skills Panel Click
    $(".skill").click(function () {
        view.updating.skillScreen.initialize(this.id);
    });

    //Skill Screen Exit Button
    $("#skill-screen #x-button").click(function () {
        view.updating.skillScreen.exit();
    });


    //  ACTION BUTTON
    $(".action-button").click(function () {
        var skill = skills[activeScreen];
        let action = skill.actions[this.id];

        if (!$(this).hasClass("disabled") && !$(this).hasClass("cusDisabled")) {
            actions.skillAction(activeScreen, action);
        } else {
            console.log("Action not available.");
        }
    });
});