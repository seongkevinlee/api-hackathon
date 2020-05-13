var moveInfoEl = $(".movie-info");
var movieInfo = new MovieInfo(moveInfoEl);

var gifEl = $(".gif-container");
var gifs = new GifCreator(gifEl);

$("#saved-movies-btn").on("click", function() {
  if ($(".movie-modal").hasClass("hidden")) {
    $(".movie-modal").removeClass("hidden");
  } else {
    $(".movie-modal").addClass("hidden");
  }
});

$("#saved-gifs-btn").on("click", function() {
  if ($(".gif-modal").hasClass("hidden")) {
    $(".gif-modal").removeClass("hidden");
  } else {
    $(".gif-modal").addClass("hidden");
  }
});

var app = new App(movieInfo, gifs);
app.start();
