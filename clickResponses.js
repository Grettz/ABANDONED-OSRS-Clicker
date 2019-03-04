$(document).ready(function(){

//Sidebar Menu Click Response
    let menuTab = $("#sidebar-container .tab");

    //Change tab BG on click/active
    menuTab.click(function(){
        //Set class to selected to change tab background img
        menuTab.removeClass();
        menuTab.addClass("tab");
        menuTab.each(function(){
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
    $(".skill").click(function(){
        activeScreen = this.id; // Set active skill screen
        $("#skill-screen").css("display", "grid"); // Show skill screen
        view.updating.skillScreen.initialize(activeScreen); // Initialize skill screen

        //Highlight active skill button
        $(".skill").css("opacity", "");
        $(this).css("opacity", "0.1");
    });

    //Skill Screen Exit Button
    $("#skill-screen #x-button").click(function(){
        $("#skill-screen").css("display", "none"); // Hide skill screen
        activeScreen = "";
        $(".skill").css("opacity", ""); // Remove highlighted skill
    });


    //  ACTION BUTTON
    $(".action-button").click(function(){
        let actionId = this.id;
        let skill = skills[activeScreen];
        let action = skill.actions[actionId];

        if(!(skill.actionActive)){
            skill.actionActive = true;
            $(".action-button").addClass("cusDisabled"); // Disable action buttons

            // Animate progress bar
            $("#action-progress").animate({
                width: "100%",
            }, {
                duration: action.time,
                easing: "linear",

                // Action complete
                done: function() {
                    $("#exp-progress").stop(true, true);
                    $(this).css("width", "0%");
                    player.skills[activeScreen].exp += action.expGain; // Add exp
                    console.log(player.skills[activeScreen].exp);
                    $(".action-button").removeClass("cusDisabled");
                    skill.actionActive = false;
                    console.log("Action Complete!");


                    // Animate exp bar
                    $("#exp-progress").animate({
                        width: player.skills.mining.exp / nextLvlExp(player.skills.mining.level) * 100 + "%",
                    },{
                        duration: 1000,
                        done: function(){
                            $("#action-progress").css("width", "0%");
                            console.log("Exp done.");
                        },
                    });
                    console.log(player.skills.mining.exp / nextLvlExp(player.skills.mining.level) * 100 + "%");
                },
            });
        }
    });
});