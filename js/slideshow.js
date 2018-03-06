/* global Galleria: false */
Galleria.loadTheme('https://cdnjs.cloudflare.com/ajax/libs/galleria/1.5.7/themes/classic/galleria.classic.min.js');
Galleria.run('.galleria', {
  height: 0.75,
  autoplay: true,
  thumbnails: false,
  showCounter: false,
  flickr: 'set:72157635984432836',
  flickrOptions: {
    max: 100,
    description: true
  }
});
