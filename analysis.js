let data, output, result;
async function analysis(){
  let link = "311.json"
  info = await fetch(link);
  data = await info.json();
}

let subdata;
function ByNumber(){
  let qu = 0, bk = 0, bx = 0, ma = 0, si = 0;
  
  for(let i = 0; i < data.length; i++){
    let pool = data[i];
    if(pool.bo == "QU"){
      qu++;
    }else if(pool.bo == "MA"){
      ma++;
    }else if(pool.bo == "BK"){
      bk++;
    }else if(pool.bo == "BX"){
      bx++;
    }else if(pool.bo == "SI"){
      si++;
    }
  }
  let chartData = [
    ["QU",qu],
    ["MA",ma],
    ["BK", bk],
    ["BX", bx],
    ["SI", si]
  ]
  
  let chartType = document.getElementById("chartType").value;
  
  displayChart(chartData,"output",chartType)
}