$(".carousel").hover(function () {
    $(".carousel-caption").addClass("animated fadeIn")
})

$(document).ready(function () {
    $(".carousel").carousel({ interval: 10000 });
})