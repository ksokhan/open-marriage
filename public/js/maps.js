YUI.add('le-maps', function (Y) {

    var isRetina = Y.config.win.devicePixelRatio >= 2;
    mapboxgl.accessToken = 'pk.eyJ1Ijoia3Nva2hhbiIsImEiOiJjaXk0MXNmd2MwMDFmMnFxcDFueGl2NTI3In0.0TJUh6Mo_pM1F9kkFxSp-Q';

    Y.all('[data-map]').each(function (mapNode) {
      var coordinates = mapNode.getData('map').split(',')
      coordinates.forEach(function(i) { return Number(i) })
      console.log(coordinates)
      var map = new mapboxgl.Map({
        container: mapNode.getDOMNode(),
        style: 'mapbox://styles/ksokhan/ciy41xopz000t2slagpwaltc9',
        center: coordinates, // starting position
        zoom: 8 // starting zoom
      });
      new mapboxgl.Marker()
        .setLngLat(coordinates)
        .addTo(map);
    });


}, '1.8.0', {
    requires: ['node-base', 'mapboxgl']
});
