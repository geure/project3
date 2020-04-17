
  var badLands = {lat: 43.7433, lng: -101.9484};
  var notchTrail = {lat: 43.7527996, lng: -101.9473715};
  var interior = {lat: 43.7263971, lng: -101.9933172};
  var ogala = {lat: 42.9404219, lng: -103.592162};
  var toadstool = {lat: 42.8576672, lng: -103.5861046};
  var wallDrug = {lat: 43.9927778, lng: -102.2438554};
  var rafter = {lat: 43.8919857, lng: -103.5964501};
  var windCave = {lat: 43.5683355, lng: -103.4976503};
  var rushmore = {lat: 43.8791025, lng: -103.4612554};
  var custer = {lat: 43.7586383, lng: -103.4401333};
  var bear = {lat: 43.9753738, lng: -103.2990829};
  var redshirt = {lat: 43.45, lng: -102.9087548};
  var map;
  var camper = 'images/camper.png';

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

    var marker = new google.maps.Marker({
      //animation: google.maps.Animation.DROP,
      animation: google.maps.Animation.BOUNCE,
      position: badLands, 
      map: map, 
      icon: camper,
      title: 'Badlands Campground'
    });
    var marker = new google.maps.Marker({
      animation: google.maps.Animation.DROP,
      //animation: google.maps.Animation.BOUNCE,
      position: notchTrail, 
      map: map, 
      title: 'Notch Trail'
    });
      var marker = new google.maps.Marker({
      animation: google.maps.Animation.DROP,
      //animation: google.maps.Animation.BOUNCE,
      position: interior, 
      map: map, 
      title: 'Interior, S.D.'
    });
      var marker = new google.maps.Marker({
      animation: google.maps.Animation.DROP,
      //animation: google.maps.Animation.BOUNCE,
      position: ogala, 
      map: map, 
      title: 'Ogala National Grassland'
    });
      var marker = new google.maps.Marker({
      animation: google.maps.Animation.DROP,
      //animation: google.maps.Animation.BOUNCE,
      position: toadstool, 
      map: map, 
      title: 'Toadstool Geological Park'
    });
      var marker = new google.maps.Marker({
      animation: google.maps.Animation.DROP,
      //animation: google.maps.Animation.BOUNCE,
      position: wallDrug, 
      map: map, 
      title: 'Wall Drug, Wall, S.D.'
    });
      var marker = new google.maps.Marker({
      //animation: google.maps.Animation.DROP,
      animation: google.maps.Animation.BOUNCE,
      position: rafter, 
      map: map, 
      icon: camper,
      title: 'Rafter J Bar Ranch'
    });
      var marker = new google.maps.Marker({
      animation: google.maps.Animation.DROP,
      //animation: google.maps.Animation.BOUNCE,
      position: windCave, 
      map: map, 
      title: 'Wind Cave National Park'
    });
      var marker = new google.maps.Marker({
      animation: google.maps.Animation.DROP,
      //animation: google.maps.Animation.BOUNCE,
      position: rushmore, 
      map: map, 
      title: 'Mount Rushmore National Memorial'
    });
      var marker = new google.maps.Marker({
      animation: google.maps.Animation.DROP,
      //animation: google.maps.Animation.BOUNCE,
      position: custer, 
      map: map, 
      title: 'Custer State Park'
    });
      var marker = new google.maps.Marker({
      animation: google.maps.Animation.DROP,
      //animation: google.maps.Animation.BOUNCE,
      position: bear, 
      map: map, 
      title: 'Bear Country, USA'
    });
}


  

/*
function initMap(){
  //alert('it works');
  var el = document.getElementById('canvas');
  var myLocation = new google.maps.LatLng(41.835117, -87.627130);
  var mapOptions = {
    center: myLocation,
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_CENTER
    }
  };

  var myMap = new google.maps.Map(el, mapOptions);

  var marker = new google.maps.Marker({
    position: myLocation,
    map: myMap,
    animation: google.maps.Animation.BOUNCE,
    icon: 'images/tick.png'
  });

  var contentString = '<h1>IIT Perlstein Hall</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate odit optio, voluptatem placeat odio dignissimos illo magnam esse asperiores voluptas at iure vero eum, nemo aperiam? Ipsam, atque nobis rem.</p>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

  google.maps.event.addListener(marker, 'mouseover', function() {
      infowindow.open(myMap, marker);
    });


}

google.maps.event.addDomListener(window, 'load', init);
*/

