class GifCreator {
  constructor(gifs) {
    this.gifs = gifs;
    // this.gif1 = null;
    // this.gif2 = null;
    // this.gif3 = null;
    // this.gif4 = null;
    // this.gif5 = null;
    // this.gif6 = null;
    // this.gif7 = null;
    // this.gif8 = null;
    // this.gif9 = null;
    // this.gif10 = null;
    // this.gif11 = null;
    // this.gif12 = null;
    // this.gif13 = null;
    // this.gif14 = null;
    // this.gif15 = null;
    // this.gif16 = null;
  }

  searchedGif(movieTitles) {
    console.log('movieTitles:', movieTitles);
    var gifUrls = movieTitles.data.map(function(gifs) {
      return gifs.images.downsized.url;
      console.log(gifUrls);
    });
    console.log('this.gifUrlArray:', gifUrls);
    this.renderGifs(gifUrls);
  }

  renderGifs(urls) {
    var gifBody = $(".gif-container");
    gifBody.empty();
    var gifImages = urls.forEach(function(url) {
    var gifImg = document.createElement("img");
    gifImg.className = "gif-img";
    gifImg.setAttribute("src", url);
    $(".gif-container").append(gifImg);
    })

  }
}
