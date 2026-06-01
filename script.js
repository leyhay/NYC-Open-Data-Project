let data;
async function init(){
    let link = "311.json"
    info = await fetch(link);
    data = await info.json();
    let output = document.getElementById("output");

    function card(data){
      let build = "";
      build = `<div class="card">
                     <h3>${pool.permit_type}</h3>
                     <p>${pool.facility_name}</p>
                     <p>${pool.inspection_date}</p>
                     <p>${pool.address_st}</p>
                     <p>${pool.bo}</p>
                     <hr>
                     <p>${pool.zip}</p>
                     <p>${pool.of_general_violations}</p>
                     <p>${pool.lat}</p>
                     <p>${pool.long}</p>
                </div>`;
                return build;
    }
  }