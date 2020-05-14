
class App {
  constructor(movieInfo, gifInfo) {
  this.savedMovies = [];
  this.savedGifs = [];
  this.movieInfo = movieInfo;
  this.gifInfo = gifInfo;
  this.searchForm = $('#search-form');
  this.searchInput = $(".search-input");
  this.applyEventHandlers = this.applyEventHandlers.bind(this);
  this.handleMovieSearchSuccess = this.handleMovieSearchSuccess.bind(this);
  this.handleMovieSearchError = this.handleMovieSearchError.bind(this);
  this.handleGifSearchSuccess = this.handleGifSearchSuccess.bind(this);
  this.handleGifSearchError = this.handleGifSearchError.bind(this);
  this.createSaveMovieBtn = this.createSaveMovieBtn.bind(this);
  this.removeMovieSaveBtn = this.removeMovieSaveBtn.bind(this);
  this.handleSaveMovieClick = this.handleSaveMovieClick.bind(this);
  this.movieInfoToggle = this.movieInfoToggle.bind(this);
  this.gifInfoToggle = this.gifInfoToggle.bind(this);
  this.savedMovieConfirmation = this.savedMovieConfirmation.bind(this);
  this.handleSaveGifClick = this.handleSaveGifClick.bind(this);
  this.saveGifConfirmation = this.saveGifConfirmation.bind(this);
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
    searchedNumber++;
    console.log('Data', data);
    this.searchGiphy(data.Title);
    this.movieInfo.searchedMovie(data);
    this.createSaveMovieBtn();
    this.movieInfoToggle();
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
    console.log(this.gifCreator);
    this.gifInfo.searchedGif(data);
    this.gifInfoToggle();
  }
  handleGifSearchError(err) {
    console.error(err);
  }

  createSaveMovieBtn() {
    var saveMovieBtn = document.createElement("button");
    saveMovieBtn.className = "btn btn-danger";
    saveMovieBtn.setAttribute("id", "save-movie-btn");
    saveMovieBtn.textContent = "SAVE";
    saveMovieBtn.addEventListener("click", this.handleSaveMovieClick);
    $(".poster-container").append(saveMovieBtn);

  }

  handleSaveMovieClick() {
    console.log('saveMovieClick this.movieInfo:', this.movieInfo);
    this.savedMovies.push(this.movieInfo.data);
    this.movieInfo.saveMovie(this.savedMovies);
    this.savedMovieConfirmation();
  }
  savedMovieConfirmation() {
    var movieSavedModal = $(".movie-saved-alert");
    movieSavedModal.removeClass("invisible");
  }

  saveGifConfirmation() {
    var gifSavedModal = $(".gif-modal");
    $(gifSavedModal).removeClass("invisible");
  }
  handleSaveGifClick() {
    this.savedGifs.push(this.gifInfo.data);
    this.gifsInfo.saveGif(this.savedGifs);
    this.savedGifConfirmation
  }

  removeMovieSaveBtn() {
    var saveMovieBtn = $("#save-movie-btn");
    if(saveMovieBtn) {
      $(".movie-info").remove(saveMovieBtn);
    } else {
      console.log(saveMovieBtn);
    }
  }

  movieInfoToggle() {
    var movieInfoContainer = $(".movie-info")
    if (searchedNumber === 1) {
      movieInfoContainer.removeClass("invisible");
    }
  }

  gifInfoToggle() {
    var gifInfoContainer = $(".gif-container")
    if (searchedNumber === 1) {
      gifInfoContainer.removeClass("invisible");
    }
  }
}
