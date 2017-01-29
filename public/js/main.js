YUI.add('le-main', function (Y) {

  var nav = Y.one('.nav');

  nav.one('.nav-toggle').on('click', function (e) {
      e.preventDefault();
      nav.one('.nav-toggle').toggleClass('is-nav-item-active');
      nav.one('.nav-items').toggleClass('is-nav-items-active');
  });

  gumshoe.init();
  smoothScroll.init();

}, '1.8.0', {
    requires: ['node-base', 'autoprefixer', 'le-maps', 'gumshoe', 'smoothscroll']
});
