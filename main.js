var moveInfoEl = $(".movie-info");
var movieInfo = new MovieInfo(moveInfoEl);

var gifEl = $(".gif-container");
var gifs = new GifCreator(gifEl);

$("#saved-movies-btn").on("click", function() {
  if ($(".gif-modal:not(.invisible)")) {
    $(".gif-modal").addClass("invisible");
  }
  if ($(".movie-modal").hasClass("invisible")) {
    $(".movie-modal").removeClass("invisible");
  } else {
    $(".movie-modal").addClass("invisible");
  }
});

$("#saved-gifs-btn").on("click", function() {
  if($(".movie-modal:not(.invisible)")) {
    $(".movie-modal").addClass("invisible")
  }
  if ($(".gif-modal").hasClass("invisible")) {
    $(".gif-modal").removeClass("invisible");
  } else {
    $(".gif-modal").addClass("invisible");
  }
});

$(".saved-movie-confirm").on("click", function() {
  $(".movie-saved-alert").addClass("invisible");
  $(".movie-poster-img").empty();
});

$(".saved-gif-cancel").on("click", function() {
  $(".gif-saved-alert").addClass("invisible");
  $(".prompt-gif").remove();
});

$(".saved-gif-confirm").on("click", function() {
  $(".gif-saved-alert").addClass("invisible");
  $(".gif-saved-confirm").removeClass("invisible")
  app.handleSaveGifClick();
});

$(".saved-gif-confirm-btn").on("click", function() {
  $(".gif-saved-confirm").addClass("invisible");
})

var searchedNumber = 0;

var app = new App(movieInfo, gifs);
app.start();
