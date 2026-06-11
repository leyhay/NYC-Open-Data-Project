let data;
async function filter(){
  let link = "311.json"
  info = await fetch(link);
  data = await info.json();

  let output = document.getElementById("output");
  let build = "";
  for(let i=0;i<data.length;i+=1){
    let pool = data[i];
    build += `<div class="container card">
                  <h3>Facility name: ${pool.facility_name}</h3>
                  Permit type : ${pool.permit_type} 
                  Inspection date : ${pool.inspection_date}
                  Number of violations : ${pool.of_all_violations}
                  <hr>
                  Borough : ${pool.bo}<br>
                  Zip code : ${pool.zip}
                  Latitude : ${pool.lat}
                  Longitude: ${pool.long}
              </div>`
            }
output.innerHTML = build;
}
function permit(){
  let permit = document.getElementById("permit").value;
  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let pool = data[i];
    if(pool.permit_type == permit){
      build += `<div class="container card">
                  <h3>Facility name: ${pool.facility_name}</h3>
                  Permit type : ${pool.permit_type} 
                  Inspection date : ${pool.inspection_date}
                  Number of violations : ${pool.of_all_violations}
                  <hr>
                  Borough : ${pool.bo}<br>
                  Zip code : ${pool.zip}
                  Latitude : ${pool.lat}
                  Longitude: ${pool.long}
              </div>`
            }
  }
  output.innerHTML = build;
}
function borough(){
  let borough = document.getElementById("borough").value;
  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let pool = data[i];
    if(pool.bo == borough){
      build += `<div class="container card">
                  <h3>Facility name: ${pool.facility_name}</h3>
                  Permit type : ${pool.permit_type} 
                  Inspection date : ${pool.inspection_date}
                  Number of violations : ${pool.of_all_violations}
                  <hr>
                  Borough : ${pool.bo}<br>
                  Zip code : ${pool.zip}
                  Latitude : ${pool.lat}
                  Longitude: ${pool.long}
              </div>`
            }
  }
  output.innerHTML = build;
}
function violation(){
  let violation = document.getElementById("violation").value;
  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let pool = data[i];
    if(pool.of_all_violations == violation){
      build += `<div class="container card">
                  <h3>Facility name: ${pool.facility_name}</h3>
                  Permit type : ${pool.permit_type} 
                  Inspection date : ${pool.inspection_date}
                  Number of violations : ${pool.of_all_violations}
                  <hr>
                  Borough : ${pool.bo}<br>
                  Zip code : ${pool.zip}
                  Latitude : ${pool.lat}
                  Longitude: ${pool.long}
              </div>`
            }
  }
  output.innerHTML = build;
}