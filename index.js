
let pool;
async function home(){
  let link = "311.json"
  info = await fetch(link);
  pool = await info.json();

  output = document.getElementById("output");
  let build = "";
  for(let i = 0; i < pool.length; i++){
    let swim = pool[i];
    build = `<div class="card">
                       <h2>Pool Inspections</h2>
                       ${swim.permit_type}
                       ${swim.facility_name}    
                       ${swim.address_st}
                       ${swim.inspection_date}
                       ${swim.inspection_type}
                       <hr>
                       ${swim.zip}
                       ${swim.lat}
                       ${swim.long}
                   </div>`;
  }

}