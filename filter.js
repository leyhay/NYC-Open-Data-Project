let data;
async function filter(){
  let link = "311.json"
  info = await fetch(link);
  data = await info.json();

  let output = document.getElementById("output");
  let build = "";
  for(let i=0;i<data.length;i+=1){
    let pool = data[i];
    build += `<div class="card">
                  <h3>Facility name: ${pool.facility_name}</h3>
                  Permit type : ${pool.permit_type} 
                  Inspection date : ${pool.inspection_date}
                  Number of violations : ${pool.of_all_violations}
                  <hr>
                  Borough : ${pool.bo}
                  Zip code : ${pool.zip}
                  Latitude : ${pool.lat}
                  Longitude: ${pool.long}
              </div>`
  }
  output.innerHTML = build;
}
