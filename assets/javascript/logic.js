var number = 0;

var intervalId;

var hangman, rpgGame, trivia, gifTastic

var portfolioArr = [
    hangman = {
        name: "Hangman Game",
        img: 'assets/images/hangman.png',
        description: "A word guess game using Boostrap vanilla Javascript and custom CSS starring Minnesota music icons",
        url: 'https://pwneill.github.io/Word-Guess-Game/'
    },
    rpgGame = {
        name: "The Wire RPG",
        img: 'assets/images/rpg.png',
        description: "An RPG game based on The Wire using Boostrap, JQuery vanilla Javascript and custom CSS",
        url: "https://pwneill.github.io/unit-4-game/"
    },

    trivia = {
        name: "90s/00s Rap Trivia Game",
        img: 'assets/images/trivia.png',
        description: "Uses Bootstrap, JQuery, vanilla Javascript and custom CSS to generate a trivia game with a countdown and scores",
        url: "https://pwneill.github.io/TriviaGame/"
    },

    gifTastic = {
        name: "GifTastic",
        img: 'assets/images/gifs.png',
        description: "Uses AJAX, Jquery, Javascript, Boostrap and the Giphy API to generate gifs of TV Characters",
        url: "https://pwneill.github.io/GifTastic/"
    },
    trainScheduler = {
        name: "Train Scheduler",
        img:  "assets/images/trainscheduler.png",
        description: "Uses Jquery, Javascript, Bootstrap and Moment.js to generate a train schedule that updates in real time",
        url: 'https://pwneill.github.io/train-scheduler/'

    }

]

function header () {
    var header = $("<h3>")
    $(header).text(randomDisplay.name)
    $(header).css("text-align", "center")
    $(header).addClass("pt-3")
    console.log(header)
    $(".main-content").append(header)
}

function preview () {
    var preview = $("<a>")
    preview.attr("href", randomDisplay.url)

    var previewImg = $("<img>")
    $(previewImg).attr("src", randomDisplay.img)
    $(previewImg).attr("alt", randomDisplay.name)
    $(previewImg).addClass("mt-3")

    $(preview).append(previewImg)
    $(".main-content").append(preview)
}

function description () {
    var description = $("<p>")
    $(description).text(randomDisplay.description)
    $(description).addClass("pt-3")
    $(".main-content").append(description)
}


function changePortfolio() {
    $("#portfolio-content").empty()

    randomNumber = [Math.floor(Math.random() * portfolioArr.length)];

    randomDisplay = portfolioArr[randomNumber]

    header()

    preview()

    description()

}

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(increment, 1000);
}

function increment() {

    number++;

    $("#show-number").html("<h2>" + number + "</h2>");

    if (number % 8 === 0) {

        changePortfolio()

    }
}

$(document).ready(function () {

    changePortfolio();

    run();

    increment();

});

