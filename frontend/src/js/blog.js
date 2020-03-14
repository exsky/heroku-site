// A $( document ).ready() block.
$( document ).ready(function() {
    /* Change active nav item to blog */
    $("#nav-blog").addClass("active");
    $(".nav").find(".active").not("#nav-blog").removeClass("active");
});