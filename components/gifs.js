class GifCreator {
  constructor(gifs) {
    this.gifs = gifs;
    this.clickedGif = null;
    this.saveGifConfirmation = null;
    this.addSaveGifConfirmation = this.addSaveGifConfirmation.bind(this);
  }

  searchedGif(movieTitles) {
    var gifUrls = movieTitles.data.map(function(gifs) {
      return gifs.images.downsized.url;
    });
    this.renderGifs(gifUrls);
  }

  renderGifs(urls) {
    var gifBody = $(".gif-container");
    gifBody.empty();
    var gifImages = urls.forEach(url => {
      var gifImg = document.createElement("img");
      gifImg.className = "gif-img";
      gifImg.setAttribute("src", url);
      $(gifImg).on("click", () => {
        this.clickedGif = url;
        this.saveGifConfirmation(url);
      });
      $('.gif-container').append(gifImg);
    });
  }

  saveGif(urls) {
    var gifModal = $(".gif-modal");
    $(gifModal).empty();
    $(gifModal).prepend("<h4>SAVED GIFS</h4>")
    var gifImages = urls.forEach(function (url) {
      var gifImg = document.createElement("img");
      gifImg.className = "saved-gif";
      gifImg.setAttribute("src", url);
      $(gifImg).on("click", function () {
        alert(url);
      })
      $(gifModal).append(gifImg);
    })
  }

  addSaveGifConfirmation(saveGifConfirmation) {
    this.saveGifConfirmation = saveGifConfirmation;
  }
}
