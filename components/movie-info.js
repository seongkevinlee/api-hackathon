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
    console.log('movieInfo:', movie);
    // var movieInfoBody = $(".info-text");
    // movieInfoBody.detach();
    // var moviePosterBody = $(".poster-container");
    // moviePosterBody.detach();
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
    console.log('movieInfoBody:', movieInfoBody);
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

    posterImg.setAttribute("src", this.poster);
    posterImg.className = "poster-img";

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
      imdbRatingText,
      )

    posterContainer.append(posterImg);
  }

  addMovie() {

  }

}
