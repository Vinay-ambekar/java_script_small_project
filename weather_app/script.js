const apikey="a5591ecb08a6895ac2b01b5d273f608e"
const weatherDataE1=document.getElementById("weather-data")
const cityInputE1=document.getElementById("city-input")

const formE1=document.querySelector("form")
formE1.addEventListener("submit",(event)=>{
    event.preventDefault();
    const cityvalue=cityInputE1.value;
    getWeatherData(cityvalue)
})
async function getWeatherData(cityvalue){
    try{
        const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&appid=${apikey}&units=metric`)
        if(!response.ok){
            throw new Error("network response was not ok")
        }
        const data= await response.json()
        const temperature=Math.round(data.main.temp)
        const description =data.weather[0].description
        const icon=data.weather[0].icon
        const details=[
            `Fells like: ${Math.round(data.main.feels_like)}°C`,
            `Humidity: ${data.main.humidity}%`,
            `Wind speed:${data.wind.speed}m/s`,
        ]
        weatherDataE1.querySelector(".icon").innerHTML=`<img src="http://openweathermap.org/img/wn/${icon}.png"
        alt="Weather Icon">`
        weatherDataE1.querySelector(".temperature").textContent=`${temperature}°C`;
        weatherDataE1.querySelector(".description").textContent=description;
        weatherDataE1.querySelector(".details").innerHTML=details
        .map((detail)=>`<div>${detail}</div>`)
        .join(" ");        
        
    } catch(error){

        weatherDataE1.querySelector(".icon").innerHTML=" ";
        weatherDataE1.querySelector(".temperature").textContent=" ";
        weatherDataE1.querySelector(".description").textContent="An Error Happened please try again";
        weatherDataE1.querySelector(".details").innerHTML=" ";

    }

}