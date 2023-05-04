const apikey="47da9c1154msh460450777b706cfp12bff4jsne6f84fba72ff"
const weatherDataE1=document.getElementById("weather-data")
const cityInputE1=document.getElementById("city-input")

const formE1=document.querySelector("form")
formE1.addEventListener("submit",(event)=>{
    event.preventDefault();
    const cityvalue=cityInputE1.value;
    console.log(cityvalue)
})