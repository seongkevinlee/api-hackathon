
class App {
  constructor(movieInfo) {
  this.savedMovies = [];
  this.movieInfo = movieInfo;
  this.gifInfo = null;
  this.searchForm = $('#search-form');
  this.searchInput = $(".search-input");
  this.applyEventHandlers = this.applyEventHandlers.bind(this);
  this.handleMovieSearchSuccess = this.handleMovieSearchSuccess.bind(this);
  this.handleMovieSearchError = this.handleMovieSearchError.bind(this);
  this.handleGifSearchSuccess = this.handleGifSearchSuccess.bind(this);
  this.handleGifSearchError = this.handleGifSearchError.bind(this);
  this.createSaveMovieBtn = this.createSaveMovieBtn.bind(this);
  this.removeMovieSaveBtn = this.removeMovieSaveBtn.bind(this);
  }


  //
  start() {
    console.log('search');
    this.applyEventHandlers();
  }

  applyEventHandlers() {
    this.searchForm.on("submit", () => {
      event.preventDefault();
      this.searchMovie(this.searchInput.val());
    });
  }

  searchMovie(movieTitle) {
    this.removeMovieSaveBtn();
    $.ajax({
      method: "GET",
      url: "http://www.omdbapi.com/?apikey=" + omdbKey + "&t=" + movieTitle,
      success: this.handleMovieSearchSuccess,
      error: this.handleMovieSearchError
    })
  }
  handleMovieSearchSuccess(data) {
    console.log('Data', data);
    this.searchGiphy(data.Title);
    this.movieInfo.searchedMovie(data);
    this.createSaveMovieBtn();
  }
  handleMovieSearchError(err) {
    console.error(err);
  }


  searchGiphy(movieTitle) {
    console.log(movieTitle);
    $.ajax({
      method: "GET",
      url: "https://cors-anywhere.herokuapp.com/api.giphy.com/v1/gifs/search?api_key=" + giphyKey + "&limit=16&q=" + movieTitle,
      success: this.handleGifSearchSuccess,
      error: this.handleGifSearchError
    })
  }
  handleGifSearchSuccess(data) {
    console.log('gif data:', data);
  }
  handleGifSearchError(err) {
    console.error(err);
  }

  createSaveMovieBtn() {
    var saveMovieBtn = document.createElement("button");
    saveMovieBtn.className = "btn btn-danger";
    saveMovieBtn.setAttribute("id", "save-movie-btn");
    saveMovieBtn.textContent = "SAVE";
    $(".poster-container").append(saveMovieBtn);

  }

  removeMovieSaveBtn() {
    var saveMovieBtn = $("#save-movie-btn");
    if(saveMovieBtn) {
      $(".movie-info").remove(saveMovieBtn);
    } else {
      console.log(saveMovieBtn);
    }
  }
}
