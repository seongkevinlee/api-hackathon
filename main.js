// var searchInput = document.querySelector(".search-input");
// var searchButton = document.querySelector(".search-button");
// var searchValue = "";
// searchButton.addEventListener("click", function() {
//   searchValue = searchInput.value;
//   app.searchMovie(searchValue)
// });

var moveInfoEl = document.querySelector(".movie-info");
var movieInfo = new MovieInfo(moveInfoEl);

// var gifsEl = document.querySelector(".gif-container");
// var gifsInfo = new GifCreator(gifsEl);


var app = new App(movieInfo);
app.start();
