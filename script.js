let data;
async function init(){
    let link = "311.json"
    info = await fetch(link);
    data = await info.json();
    let output = document.getElementById("output");
    
    build = "";
    for(let i=0;i<data.length;i+=1){
        pool = data[i]
        build += `<div class=card>
                     <h3>${pool.permit_type}</h3>
                     <p>${pool.facility_name}</p>
                     <p>${pool.facility_name}</p>
                     <p>${pool.facility_name}</p>
                     <p>${pool.facility_name}</p>
                     <hr>
                     <p>${pool.facility_name}</p>
                     <p>${pool.facility_name}</p>
                     <p>${pool.facility_name}</p>
                </div>`
    }
    output.innerHTML = build;
}
