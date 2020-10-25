
function myFunction() {
    document.getElementById("dropdown").classList.toggle("show");
}

$(function(){
    /* $("document").on("click", ".avatar", function() {
        $(".dropdown").toggleClass("visible");
    });
*/
    function myFunction() {
        document.getElementById("dropdown").classList.toggle("show");
    }

    $(".avatar-container").click(function (){
        $(".dropdown").toggle();
    });
});
