$(document).ready(function(){
//Sticky menu
$('.js-service').waypoint(function(direction){
if (direction=="down") {
    $("nav").addClass("sticky")
} else {
    $("nav").removeClass("sticky")
}
});









    //MixItUp
    var mixer= mixitup('.container')
});