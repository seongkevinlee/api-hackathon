var searchInput = document.querySelector(".search-input");
var searchButton = document.querySelector(".search-button");
var searchValue = "";
searchButton.addEventListener("click", function() {
  searchValue = searchInput.value;
  app.searchMovie(searchValue)
});



var app = new App(searchValue);
