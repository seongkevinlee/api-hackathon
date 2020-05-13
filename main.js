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

var searchedNumber = 0;

var app = new App(movieInfo, gifs);
app.start();
