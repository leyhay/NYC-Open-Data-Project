let data;
async function filter(){
  let link = "311.json"
  info = await fetch(link);
  data = await info.json();

  let output = document.getElementById("output");
  let build = "";
  for(let i = 0; i < data.length; i+=1){
    let pool = data[i];
    build += `<div class="card">
                  <h2>Pool Inspections</h2>
                  Permit type : ${pool.permit_type}<br>
                  Facility name: ${pool.facility_name}<br>  
                  Inspection date : ${pool.inspection_date}<br>
                  Number of violations : ${pool.of_all_violations}<br>
                  <hr>
                  Borough : ${pool.bo}<br>
                  Zip code : ${pool.zip}<br>
                  Latitude : ${pool.lat}<br>
                  Longitude: ${pool.long}
              </div>`;
  }
  output.innerHTML = build;
}
