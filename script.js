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

  let permit_type = fillDropDown("permit_type");
  document.getElementById("permit_type").innerHTML = permit_types;

  let facility_name = fillDropDown("facility_name");
  document.getElementById("facility_name").innerHTML = facility_name;

  let zip = fillDropDown("zip");
  document.getElementById("zip").innerHTML = zip;
  
}
let data;
async function home(){
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
}