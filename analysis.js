
let data, output, result;
async function analysis(){
  let link = "311.json"
  info = await fetch(link);
  data = await info.json();
}
  let output = document.getElementById("output");
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
