const apikey="47da9c1154msh460450777b706cfp12bff4jsne6f84fba72ff"
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
        const response= await fetch(`https://open-weather-map27.p.rapidapi.com/weather
        &q=${cityvalue}&appid=${apikey}&units=standard`)
        if(!response.ok){
            throw new Error("network response was not ok")
        }
        const data= await response.json()
        console.log(data)
    } catch(error){

    }

}