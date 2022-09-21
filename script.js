
var container=document.createElement("div");
container.setAttribute("class","container");

var row=document.createElement("div");
row.classList.add("row");



var res=fetch("https://restcountries.com/v2/all")
res.then((data)=>data.json()).then((value)=>foo(value));



function foo(value){
  // console.log(value);
    for(var i=0;i<value.length;i++){
      let latitude = value[i].latlng[0];
      let longitude = value[i].latlng[1];
        row.innerHTML+=`
        <div class="col-lg-4 col-sm-12">
        <div class="card border-primary mb-3" style="width:300px;height:400px;">
        <div class="card-body text-primary" >
        <h2  style="background-color:black; color: white;">${value[i].name}</h2>
        <img src="${value[i].flag}" class="card-img-top" style="width:250px;height:150px;" >
        <div class="captial">Captital:${value[i].capital}</div>
        <div class="region">Region:${value[i].region}</div>
        <div class="countrycode">Country Code:${value[i].callingCodes}</div>
        
        <button class="btn-btn-primary" onclick="foo1(${latitude},${longitude})">
        Click For Weather</button>
        </div>
      </div>
      </div>`;

      container.append(row);
      document.body.append(container);
    }
     
   
}

async function foo1(lat,lon){
  let weather=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=05a9d997253ef3c2fe86d73254a3b288`);;
  let weather1=await weather.json();
  console.log(weather1);
  var weatherid=document.getElementById('weather');
  weatherid.innerHTML=`Temp:${weather1.main.temp}`;

  var weatherid1=document.getElementById('weather1');
  weatherid1.innerHTML=`Humidty:${weather1.main.humidity}`;

  var weatherid2=document.getElementById('weather2');
  weatherid2.innerHTML=`Pressure:${weather1.main.pressure}`;
}




// <button type="button" onclick="foo1(${name})">Click for Weather</button> <br>

// <button class="btn-btn-primary" onclick="foo1(${latitude},${longitude})">
// async function foo1(lat,lon)
// let weather=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=05a9d997253ef3c2fe86d73254a3b288`);