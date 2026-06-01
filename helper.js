function get(id){
  return document.getElementById(id);
}
function showMap(lat, lon){
  let location = [lat, lon];
  if(!mapObj){
      mapObj = L.map("map");
  } 
  let map = mapObj.setView(location, 14);

  const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
  }).addTo(map);

  let marker = L.marker(location).addTo(map);
}
  function card( info ){ 

  let location = [info.latitude, info.longitude];

  let mapButton = "";
  if(info.latitude && info.longitude){
    mapButton = `<input type="button" onclick="showMap( ${location} )" value="Map">`
  }

  let build = `<div class="card fitted">
                  <h3>${info.complaint_type}</h3>
                  <h5>${info.borough}</h5>
                  <p>${info.incident_zip}</p>
                  <p>${info.descriptor}</p><hr>
                  <p>${info.agency_name}<br>(${info.status})</p>
                  ${mapButton}
              </div>`;
  return build;
}