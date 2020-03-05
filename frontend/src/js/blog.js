/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("sidebar").style.display = "block";
    document.getElementById("content").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("content").style.marginLeft = "0";
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