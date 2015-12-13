(function waitForElement(){
    if(typeof Galleria !== "undefined"){
        loadGalleria();
    }else{
        setTimeout(function() { waitForElement(); }, 250);
    }
})()

function loadGalleria() {
  Galleria.loadTheme('/js/galleria/classic/galleria.classic.min.js');
  Galleria.run('#testGalleria', {
    autoplay: true,
    thumbnails: false,
    showCounter: false,
    height: 0.75,
    flickr: 'set:72157635984432836',
    flickrOptions: {
      max: 100,
      description: true
    }
  });
}
