/* Set the width of the side navigation to 250px */
function openNav() {
    $("#sidebar").css("width", "18%");
    $("#sidebar").css("display", "block");
    $("#content").css("margin-left", "22%");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    $("#sidebar").css("width", "0");
    $("#sidebar").css("display", "none");
    $("#content").css("margin-left", "4%");
}

// A $( document ).ready() block.
$( document ).ready(function() {
    $("#sidebar-icon").click(function (){
        openNav();
    });
    $("#close-sidebar-btn").click(function (){
        closeNav();
    });
});