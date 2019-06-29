$(document).ready(function () {

    $(".carousel").hover(function () {
        $(".carousel-caption").addClass("animated fadeIn")
    });

    $(".carousel").carousel({ interval: 15000 });
})