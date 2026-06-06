
let data;
async function analysis(){
  let link = "311.json"
  info = await fetch(link);
  pool = await info.json();
  var chart = c3.generate({
    analysis: {
        columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 130, 100, 140, 200, 150, 50]
        ],
        type: 'spline'
    }
})
output.innerHTML
};