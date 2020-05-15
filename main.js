var moveInfoEl = $(".movie-info");
var movieInfo = new MovieInfo(moveInfoEl);

var gifEl = $(".gif-container");
var gifs = new GifCreator(gifEl);

$("#saved-movies-btn").on("click", function() {
  if ($(".movie-modal").hasClass("invisible")) {
    $(".movie-modal").removeClass("invisible");
  } else {
    $(".movie-modal").addClass("invisible");
  }
});

$("#saved-gifs-btn").on("click", function() {
  if ($(".gif-modal").hasClass("invisible")) {
    $(".gif-modal").removeClass("invisible");
  } else {
    $(".gif-modal").addClass("invisible");
  }
});

$(".saved-movie-confirm").on("click", function() {
  $(".movie-saved-alert").addClass("invisible");
  $(".posterImg2").remove();
});

$(".saved-gif-cancel").on("click", function() {
  $(".gif-saved-alert").addClass("invisible");
  $(".prompt-gif").remove();
});

$(".saved-gif-confirm").on("click", function() {
  $(".gif-saved-alert").addClass("invisible");
  app.handleSaveGifClick();
});

var searchedNumber = 0;

var app = new App(movieInfo, gifs);
app.start();
