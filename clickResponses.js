$(document).ready(function() {

    //Change tab BG on click/active
    let menuTab = $("#sidebar-container .tab");
    menuTab.click(function() {
        //Set class to selected to change tab background img
        menuTab.removeClass();
        menuTab.addClass("tab");
        menuTab.each(function() {
            $(this).addClass(this.id);
        });
        //Add selected to class name
        $(this).removeClass(this.id).addClass(this.id + "-selected");

        //Show selected sidebar panel
        let panels = $("#sidebar-panel .panel");
        panels.removeClass("hide").removeClass("show").addClass("hide");
        $("#" + this.id + "-panel").removeClass("hide").addClass("show");
    });

    // Skills Panel Click
    $(".skill").click(function() { 
        view.updating.skillScreen.initialize(this.id);
    });

    // Skill Screen Exit Button
    $("#skill-screen #x-button").click(function() { 
        view.updating.skillScreen.exit();
    });

    // Action Button
    $(".action-button").click(function() { 
        var skill = skills[activeScreen];
        let action = skill.actions[this.id];

        if (!$(this).hasClass("disabled") && !$(this).hasClass("cusDisabled")) {
            actions.skillAction(activeScreen, action);
        } else {
            console.log("Action not available.");
        }
    });

    // Drag & drop inventory item
    $(".invSlot").on("mousedown", "img", function(e){
        let item = this;
        let slot = $(item).parent().get(0);

        //Prepare item for moving. & Styling
        item.style.position = "absolute";
        item.style.zIndex = "1000";
        item.style.opacity = 0.7;

        moveAt(e.pageX, e.pageY);

        //Center item on mouse pos
        function moveAt(pageX, pageY) {
            item.style.left = pageX - item.offsetWidth / 2 + 'px';
            item.style.top = pageY - item.offsetHeight / 2 + 'px';
        }
        function onMouseMove(e) {
            moveAt(e.pageX, e.pageY);
        }

        function onMouseUp() {

            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);

            //Center of item/mouse position
            let itemX = item.offsetLeft + item.offsetWidth / 2;
            let itemY = item.offsetTop + item.offsetHeight / 2;

            $(".invSlot").each(function() {
                let isMouseOverSlot = itemX >= this.offsetLeft && itemY >= this.offsetTop && itemX <= this.offsetLeft + this.offsetWidth && itemY <= this.offsetTop + this.offsetHeight;

                if(isMouseOverSlot) {
                    let selItem = player.inventory[slot.id];
                    let targetItem = player.inventory[this.id];
                    //Swap items
                    player.inventory[this.id] = selItem;
                    player.inventory[slot.id] = targetItem;

                    view.updating.inventory.update();
                }
            });
            //Return to initial state
            item.style.zIndex = "initial";
            item.style.opacity = "initial";
            item.style.position = "initial";
        }

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
    });

    //Disable browser conflict
    $(".invSlot").on("dragstart", "img", function() {
        return false;
    });
});