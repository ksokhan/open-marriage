YUI.add('le-wedding', function (Y) {
  Y(document.body).on('scroll', (test) => {
    console.log("woo")
  })
}, '1.8.0', {
    requires: ['le-main']
});
