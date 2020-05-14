class GifCreator {
  constructor(gifs) {
    this.gifs = gifs;
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
    $(gifImg).on("click", function() {
      console.log("this.app.saveGifConfirmation:");
      this.app.saveGifConfirmation();// will start the confirmation modal
    });
    $(".gif-container").append(gifImg);
    });
  }

  saveGif(urls) {
    var gifModal = $(".gif-modal");
    var gifImages = urls.forEach(function (url) {
      var gifImg = document.createElement("img");
      gifImg.className = "gif-img";
      gifImg.setAttribute("src", url);
      $(gifImg).on("click", function () {
        alert(url); // will start the confirmation modal
      })
      $(gifModal).append(gifImg);
    })
  }
}
