window.onscroll = function() { change() };
var navbar = document.getElementById("nav");


function change() {
    if (window.pageYOffset >= 60) {

        nav.classList.add("no-pad")
    } else {

        nav.classList.remove("no-pad");
    }
}

$(window).bind('load', function() {
    $("body").removeClass('disable-scroll');
    $("#loader").attr("style", "display:none")

});