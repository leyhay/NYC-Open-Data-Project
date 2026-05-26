let data;
async function init(){
    let link = "311.json"
    info = await fetch(link);
    data = await info.json();
    let output = document.getElementById("output");
}