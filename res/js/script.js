$(document).ready(function() {
    $(".avatar").click(function(e) {
        e.preventDefault();
        $(".dropdown").css("display", "block");
    });
});