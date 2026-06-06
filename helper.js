function get(id){
  return document.getElementById(id);
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