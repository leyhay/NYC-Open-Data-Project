let data;
async function filter(){
  let link = "311.json"
  info = await fetch(link);
  data = await info.json();

  output = document.getElementById("output");
  result = document.getElementById("result");
  let build = "";
  let ct = 0;
  for(let i = 0; i < data.length; i++){
    let pool = data[i];
    build = `<div class="card">
                  <h2>Pool Inspections</h2>
                  ${pool.permit_type}
                  ${pool.facility_name}    
                  ${pool.address_st}
                  ${pool.inspection_date}
                  ${pool.inspection_type}
                  <hr>
                  ${pool.zip}
                  ${pool.lat}
                  ${pool.long}
              </div>`;
    ct++;
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}