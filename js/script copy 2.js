
var locations = [
  {lat: 43.7433, lng: -101.9484},
  {lat: 43.7527996, lng: -101.9473715},
  {lat: 43.7263971, lng: -101.9933172},
  {lat: 42.9404219, lng: -103.592162},
  {lat: 42.8576672, lng: -103.5861046},
  {lat: 43.9927778, lng: -102.2438554},
  {lat: 43.8919857, lng: -103.5964501},
  {lat: 43.5683355, lng: -103.4976503},
  {lat: 43.8791025, lng: -103.4612554},
  {lat: 43.7586383, lng: -103.4401333},
  {lat: 43.9753738, lng: -103.2990829}
];

var longNames = [
  'Badlands Campground',
  'Notch Trail',
  'Interior, S.D.',
  'Ogala National Grassland',
  'Toadstool Geological Park',
  'Wall Drug, Wall, S.D.',
  'Rafter J Bar Ranch',
  'Wind Cave National Park',
  'Mount Rushmore National Memorial',
  'Custer State Park',
  'Bear Country, USA'
];

var redshirt = {lat: 43.45, lng: -102.9087548};
var map;
var camper = 'images/camper.png';
var markers = [];

function initMap() {
  map = new google.maps.Map(
    document.getElementById('map'), {
    center: redshirt,
    zoom: 9.1,
    scaleControl: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeId: google.maps.MapTypeId.TERRAIN,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_CENTER
    }/*,
      mapTypeControl: true,
          mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            mapTypeIds: ['roadmap', 'terrain']
          }*/
  });

  clearMarkers();
  for (var i = 0; i < locations.length; i++) {
    addMarkerWithTimeout(locations[i], longNames[i], i * 200);
  }

  function addMarkerWithTimeout(position, name, timeout) {
    window.setTimeout(function() {
      if (name === 'Badlands Campground' || name === 'Rafter J Bar Ranch') {
        markers.push(new google.maps.Marker({
        position: position,
        map: map,
        animation: google.maps.Animation.BOUNCE,
        icon: camper
        }))}
      else {
        markers.push(new google.maps.Marker({
        position: position,
        map: map,
        animation: google.maps.Animation.DROP,
        title: name
      }))}
    }, timeout);
  }

  function clearMarkers() {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
    markers = [];
  }

}

/* this code works
        for (var i = 0; i < names.length; i++) {
          var marker = new google.maps.Marker({
            //animation: google.maps.Animation.DROP,
            animation: google.maps.Animation.BOUNCE,
            position: locations[i], 
            map: map, 
            icon: camper,
            title: longNames[i]
          });
        }
end code - this code works */






