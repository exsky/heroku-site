// A $( document ).ready() block.
$( document ).ready(function() {
    /* Change active nav item to blog */
    $(".nav").find(".active").removeClass("active");
    $("#nav-blog").addClass("active");
});