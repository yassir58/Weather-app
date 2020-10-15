var api_key="f65c9ac4a3a9078e3afc6cc8eaef1b62";
const  city_name=document.getElementById("input");
var endPoint="https://api.openweathermap.org/data/2.5/weather?q=";
const temp=document.getElementById('temp');
const humid=document.getElementById("humidity");
const weather=document.getElementById("weather");
const pressure=document.getElementById("pressure");
const timezone=document.getElementById("timezone");
const windSpeed=document.getElementById("wind-speed");
const geolocation=document.getElementById("geolocation");
const windDeg=document.getElementById("wind-deg");
const emoji=document.querySelector(".emoji");

 function getWeather(e){
     e.preventDefault();
     fetch(endPoint +city_name.value+"&appid="+api_key)
     .then(data=>data.json())
    .then(data=>{
       temp.innerHTML=data.main.temp;
       humid.innerHTML=data.main.humidity;
       weather.innerHTML=data.weather[0].description;
       pressure.innerHTML=data.main.pressure;
       timezone.innerHTML=data.timezone;
       geolocation.innerHTML=data.name;
       windSpeed.innerHTML=data.wind.speed;
    windDeg.innerHTML=data.wind.deg;
    
    console.log(data)
    if(data.weather[0].main === "Clear"){
     
        emoji.innerHTML="☀️";
    }else if(data.weather[0].main === "Clouds"){
       
        emoji.innerHTML="☁";
    }else if(data.weather[0].main === "Rain"){
        
        emoji.innerHTML="🌧️";
    }else if(data.weather[0].main === "Haze"){
        emoji.innerHTML="☁";
    }else if (data.weather[0].main === "Smoke"){
        emoji.innerHTML="🌫";
    }
    else if (data.weather[0].main === "Snow"){
        emoji.innerHTML="❄️"
    }
    });
   console.log(city_name.value)
   
}
document.getElementById('form').addEventListener('submit',getWeather);