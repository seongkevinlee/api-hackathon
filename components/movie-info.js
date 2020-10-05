class MovieInfo {
  constructor(movieInfo) {
    this.movieInfo = movieInfo;
    this.title = null;
    this.year = null;
    this.rated = null;
    this.released = null;
    this.runTime = null;
    this.actors = null;
    this.awards = null;
    this.director = null;
    this.plot = null;
    this.imdbRating = null;
    this.poster = null;
  }

  searchedMovie(movie) {
    this.title = "Title: " + movie.Title;
    this.year = "Year: " + movie.Year;
    this.rated = "Rated: " + movie.Rated;
    this.released = "Released: " + movie.Released;
    this.runTime = "Run Time: " + movie.Runtime;
    this.actors = "Actors/Actresses: " + movie.Actors;
    this.awards = "Awards: " + movie.Awards;
    this.director = "Director: " + movie.Director;
    this.plot = "Plot: " + movie.Plot;
    this.imdbRating = "IMDB Rating: " + movie.imdbRating;
    this.poster = movie.Poster;
    this.renderMovie(movie);
  }

  renderMovie(data) {
    this.data = data;
    var movieInfoBody = $(".info-text");
    var posterContainer = $(".poster-container");
    movieInfoBody.empty();
    posterContainer.empty();

    var titleText = document.createElement("p");
    var yearText = document.createElement("p");
    var ratedText = document.createElement("p");
    var releasedText = document.createElement("p");
    var runTimeText = document.createElement("p");
    var actorsText = document.createElement("p");
    var awardsText = document.createElement("p");
    var directorText = document.createElement("p");
    var plotText = document.createElement("p");
    var imdbRatingText = document.createElement("p");
    var posterImg = document.createElement("img");
    var posterImg2 = document.createElement("img");

    posterImg.setAttribute("src", this.poster);
    posterImg.setAttribute("alt", this.title);
    posterImg.className = "poster-img";
    posterImg2.setAttribute("src", this.poster);
    posterImg2.setAttribute("alt", this.title);
    posterImg2.className = "poster-img2";

    titleText.textContent = this.title;
    yearText.textContent = this.year;
    ratedText.textContent = this.rated;
    releasedText.textContent = this.released;
    runTimeText.textContent = this.runTime;
    actorsText.textContent = this.actors;
    awardsText.textContent = this.awards;
    directorText.textContent = this.director;
    plotText.textContent = this.plot;
    imdbRatingText.textContent = this.imdbRating;

    movieInfoBody.append(
      titleText,
      yearText,
      ratedText,
      releasedText,
      runTimeText,
      actorsText,
      awardsText,
      directorText,
      plotText,
      imdbRatingText
      );

    posterContainer.append(posterImg);

    $(".movie-poster-img").append(posterImg2);
  }

  saveMovie(movieInfo) {
    var movieModalContainer = $(".movie-modal");

    var movieModalBoxes = document.createElement("div");
    movieModalBoxes.className = "movie-modal-info d-flex flex-row align-items-start justify-content-between";

    var savedModalMovie = document.createElement("div");
    savedModalMovie.className = "modal-info-text";

    var savedModalPoster = document.createElement("div");
    savedModalPoster.className = "modal-poster-container";

    var titleText = document.createElement("p");
    var yearText = document.createElement("p");
    var ratedText = document.createElement("p");
    var releasedText = document.createElement("p");
    var runTimeText = document.createElement("p");
    var actorsText = document.createElement("p");
    var awardsText = document.createElement("p");
    var directorText = document.createElement("p");
    var plotText = document.createElement("p");
    var imdbRatingText = document.createElement("p");

    var posterImg = document.createElement("img");
    posterImg.setAttribute("src", this.poster);
    posterImg.className = "poster-img2";

    titleText.textContent = this.title;
    yearText.textContent = this.year;
    ratedText.textContent = this.rated;
    releasedText.textContent = this.released;
    runTimeText.textContent = this.runTime;
    actorsText.textContent = this.actors;
    awardsText.textContent = this.awards;
    directorText.textContent = this.director;
    plotText.textContent = this.plot;
    imdbRatingText.textContent = this.imdbRating;

    savedModalMovie.append(
      titleText,
      yearText,
      ratedText,
      releasedText,
      runTimeText,
      actorsText,
      awardsText,
      directorText,
      plotText,
      imdbRatingText,
    );
    savedModalPoster.append(posterImg);

    movieModalBoxes.append(savedModalMovie, savedModalPoster);
    movieModalContainer.append(movieModalBoxes);
  }

}
