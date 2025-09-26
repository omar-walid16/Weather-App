const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

async function weatherApi(city) {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7d289a236f13e79ba38ed6277b5f7433&units=metric`);
    let data = await response.json();
    console.log(data)

    document.querySelector('.temp').innerHTML = `${Math.round(data.main.temp)}°C`;
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humidity').innerHTML = `${data.main.humidity}%`;
    document.querySelector('.wind').innerHTML = `${data.wind.speed}Km/h`;

    if(data.weather[0].main == "Clouds")
    {
        weatherIcon.src = "clouds.png"
    }
    else if(data.weather[0].main == "Rain")
    {
        weatherIcon.src = "rain.png"
    }
    else if(data.weather[0].main == "Drizzle")
    {
        weatherIcon.src = "drizzle.png"
    }
    else if(data.weather[0].main == "Mist")
    {
        weatherIcon.src = "mist.png"
    }
    else if(data.weather[0].main == "Clear")
    {
        weatherIcon.src = "clear.png"
    }
    else if(data.weather[0].main == "Snow")
    {
        weatherIcon.src = "snow.png"
    }

    document.querySelector('.details').style.display = "block"
}

searchBtn.addEventListener('click', ()=> {
    weatherApi(searchBox.value);
    searchBox.value = ""
})
