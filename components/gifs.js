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
    // var gifUrls = movieTitles.map(function(gifs) {
    //   return gifs.url;
    // });
    var gifUrls = [];
    for(var index = 0 ; index < movieTitles.length ; index++) {
      gifUrls.push(movieTitles[index].url);
    }

    // this.gifUrls = gifUrls;
    console.log('this.gifUrlArray:', gifUrls);
    this.renderGifs(gifUrls);
    // this.gif1 = movieTitle[0].url;
    // this.gif2 = movieTitle[1].url;
    // this.gif3 = movieTitle[2].url;
    // this.gif4 = movieTitle[3].url;
    // this.gif5 = movieTitle[4].url;
    // this.gif6 = movieTitle[5].url;
    // this.gif7 = movieTitle[6].url;
    // this.gif8 = movieTitle[7].url;
    // this.gif9 = movieTitle[8].url;
    // this.gif10 = movieTitle[9].url;
    // this.gif11 = movieTitle[10].url;
    // this.gif12 = movieTitle[11].url;
    // this.gif13 = movieTitle[12].url;
    // this.gif14 = movieTitle[13].url;
    // this.gif15 = movieTitle[14].url;
    // this.gif16 = movieTitle[15].url;
  }

  renderGifs(urls) {
    var gifImages = urls.forEach(function(url) {
    var gifImg = document.createElement("img");
    gifImg.className = "gif-img";
    $(".gif-container").append(gifImg);
    })
    // gifImg1 = document.createElement("img");
    // gifImg2 = document.createElement("img");
    // gifImg3 = document.createElement("img");
    // gifImg4 = document.createElement("img");
    // gifImg5 = document.createElement("img");
    // gifImg6 = document.createElement("img");
    // gifImg7 = document.createElement("img");
    // gifImg8 = document.createElement("img");
    // gifImg9 = document.createElement("img");
    // gifImg10 = document.createElement("img");
    // gifImg11 = document.createElement("img");
    // gifImg12 = document.createElement("img");
    // gifImg13 = document.createElement("img");
    // gifImg14 = document.createElement("img");
    // gifImg15 = document.createElement("img");
    // gifImg16 = document.createElement("img");
  }
}
