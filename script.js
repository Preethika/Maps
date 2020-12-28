mapboxgl.accessToken = 'pk.eyJ1IjoicHJlZXRoaWthMTEiLCJhIjoiY2tqOGthcjUxMDloaTJ3cnkzaGpsenN5cSJ9.-pslk9RR-wdzI9CaSpb_Ig';

navigator.geolocation.getCurrentPosition(
  successCallback,
  errorCallback,
  {
    enableHighAccuracy: true
  }
);

function successCallback(position) {
  console.log('position ', position);
  setMap([position.coords.longitude, position.coords.latitude]);
}
function errorCallback(position) {
  setMap([-2.24, 53.48]);
}

function setMap(center) {
  const map = new mapboxgl.Map({
    container: 'mapContainer',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: center,
    zoom:12
  });

  const navControl = new mapboxgl.NavigationControl();
  const directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
  });
  
  map.addControl(navControl);
  map.addControl(directions);
}

