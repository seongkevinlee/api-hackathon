
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
    this.applyEventHandlers();
    this.gifInfo.addSaveGifConfirmation(this.saveGifConfirmation);
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
      cache: false,
      beforeSend: function () {
        $("#loading-gif").show();
      },
      complete: function () {
        $("#loading-gif").hide();
      },
      success: this.handleMovieSearchSuccess,
      error: this.handleMovieSearchError
    })
  }
  handleMovieSearchSuccess(data) {
    searchedNumber++;
    if(data.Title === undefined){
      $(".movie-info").removeClass("invisible");
      var noResultsText = "<h4 class='no-result-txt'>NO SEARCH RESULTS</h4>"
      $(".info-text").empty();
      $(".poster-container").empty();
      $(".info-text").prepend(noResultsText);
      this.searchGiphy(data.Title);
    } else {
      $(".no-result-text").remove();
      this.searchGiphy(data.Title);
      this.movieInfo.searchedMovie(data);
      this.createSaveMovieBtn();
      this.movieInfoToggle();
    }
  }
  handleMovieSearchError(err) {
    console.error(err);
  }


  searchGiphy(movieTitle) {
    $.ajax({
      method: "GET",
      url: "https://cors-anywhere.herokuapp.com/api.giphy.com/v1/gifs/search?api_key=" + giphyKey + "&limit=16&q=" + movieTitle,
      cache: false,
      beforeSend: function(){
        $("#loading-gif").show();
      },
      complete: function() {
        $("#loading-gif").hide();
      },
      success: this.handleGifSearchSuccess,
      error: this.handleGifSearchError
    })
  }
  handleGifSearchSuccess(data) {
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
    this.savedMovies.push(this.movieInfo.data);
    this.movieInfo.saveMovie(this.savedMovies);
    this.savedMovieConfirmation();
  }
  savedMovieConfirmation() {
    var movieSavedModal = $(".movie-saved-alert");
    movieSavedModal.removeClass("invisible");
  }

  saveGifConfirmation(gifUrl) {
    var gifSavedModal = $(".gif-saved-alert");
    $(gifSavedModal).removeClass("invisible");
    var saveGifPromptImg = $("<img>").attr("src", gifUrl).addClass("prompt-gif");
    $(gifSavedModal).append(saveGifPromptImg);
  }
  handleSaveGifClick() {
    this.savedGifs.push(this.gifInfo.clickedGif);
    this.gifInfo.saveGif(this.savedGifs);
    this.savedGifConfirmation
    $(".prompt-gif").remove();

  }

  removeMovieSaveBtn() {
    var saveMovieBtn = $("#save-movie-btn");
    if(saveMovieBtn) {
      $(".movie-info").remove(saveMovieBtn);
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
