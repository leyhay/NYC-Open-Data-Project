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

  function card(  info ){
       let build = `<div class="card">
                       <h2>Pool Inspections</h2>
                       ${info.permit_type}
                       ${info.facility_name}    
                       ${info.address_st}
                       ${info.inspection_date}
                       ${info.inspection_type}
                       <hr>
                       ${info.zip}
                       ${info.lat}
                      ${info.long}
                   </div>`;
       return build;
}
}