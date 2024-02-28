var res=fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
.then((data)=>data.json()).then((data1)=>bar(data1))

/* var res1=fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json")
.then((data)=>data.json()).then((data1)=>console.log(data1)) */

var container=document.createElement("div")
container.className="container"

var row=document.createElement("div")
row.className="row"

function bar(data1){
    for(var i=0;i<data1.length;i++){
        var col=document.createElement("div")
        col.className="col-md-4";
        col.innerHTML=`<div class="card" style="width: 18rem;">
                            <div class="card-body">
                            <h5 class="card-title">${data1[i].name}</h5>
                            <h5 class="card-title">${data1[i].capital}</h5>
                            </div>
                        </div>`

                    row.append(col)
                    container.append(row)
                    document.body.append(container)
}
}