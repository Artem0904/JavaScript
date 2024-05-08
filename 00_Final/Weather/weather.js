//http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=c17b8e4d7f7337486746cd924109d768

const todayBtn = document.querySelector('#todayBtn');
const fiveDaysBtn = document.querySelector('#fiveDaysBtn');
const todayDiv = document.querySelector('#todayDiv');
const fiveDaysDiv = document.querySelector('#fiveDaysDiv');
let main = document.querySelector('#mainContent');

// let lat;
// let lon;
// let a = navigator.geolocation.getCurrentPosition((res) => {
//     console.log(`My location: ${res.coords.latitude} : ${res.coords.longitude}`);
// }, () => console.warn("Cannot get your location!"));


let kelvinDigree = 273.15;
let city = "Rivne";
let api = `http://api.openweathermap.org/data/2.5/forecast?id=524901&q=${city}&appid=c17b8e4d7f7337486746cd924109d768`;
toToday(api);



// let date = new Date();
// let dateStr = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
// let dataApi;
// function getDataAPI(api){
//     fetch(api)
//         .then(res => res.json())
//         .then(data => {
//             dataApi = {...dataApi, ...data}; 
//         });
// }
// console.log(dataApi.list[0].dt_text);

document.addEventListener('click', function (event) {
    if (event.target.classList.contains('weatherCard')) {
        console.log(`Button clicked: ${event.target.innerText}`);
    }
});



function toFiveDays(api) {
    fetch(api)
        .then(res => res.json())
        .then(data => {
            let week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

            main.innerHTML = `<div id="fiveDaysBlock">
                
            </div>

            <table>
                <thead>
                    <tr id="time">
                        <th>TODAY</th>
                    </tr>
                </thead>
                <tbody id="weatherData">
                    <tr id="icons">
                        <td></td>
                    </tr>
                    <tr id="forecast">
                        <td>Forecast</td>
                    </tr>
                    <tr id="temp">
                        <td>Temp (C)</td>
                    </tr>
                    <tr id="realTemp">
                        <td>RealFeel</td>
                    </tr>
                    <tr id="wind">
                        <td>Wind (km/h)</td>
                    </tr>
                </tbody>
            </table>`;

            const fiveDaysBlock = document.getElementById('fiveDaysBlock');
            const currentDate = new Date();
            currentDate.setHours(0, 0, 0, 0);

            let todayAdded = false;

            data.list.forEach(dataa => {

                const forecastDate = new Date(dataa.dt_txt);

                if (forecastDate.getHours() === 15) 
                {
                    const card = document.createElement('button');
                    card.classList.add('weatherCard');

                    const dayOfWeek = forecastDate.toLocaleDateString('en-US', { weekday: 'long' });
                    const date = forecastDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

                    card.innerHTML = `
                        <span>${todayAdded ? dayOfWeek : 'Today'}</span>
                        <span>${date}</span>
                        <img src="http://openweathermap.org/img/wn/${dataa.weather[0].icon}.png" alt="Weather icon">
                        <span>${Math.round(dataa.main.temp - kelvinDigree)}°C</span>
                        <span>${dataa.weather[0].description}</span>
                    `;

                    fiveDaysBlock.appendChild(card);
                    todayAdded = true;
                }
            });

            // todayDiv.innerHTML = `<div id="todayDiv"><button id="todayBtn">Today</button></div>`;
            // fiveDaysBtn.innerHTML = `<div id="fiveDaysDiv" class="bottom-border"><button id="fiveDaysBtn">5-day forecast</button></div>`;
        });
}

fiveDaysBtn.onclick = (event) => {
    toFiveDays(api);
}

function toToday(api) {
    fetch(api)
        .then(res => res.json())
        .then(data => {
            let currDate = new Date(data.list[0].dt_txt);
            let date = `${currDate.getDate()}.${currDate.getMonth() + 1 > 10 ? `${currDate.getMonth() + 1}` : `0${currDate.getMonth() + 1}`}.${currDate.getFullYear()}`;
            console.log(date);


            main.innerHTML = `<div class="WeatherBlock">
                <div class="currWeatherHead">
                    <span class="smallerMainText mainText">current weather</span>
                    <span class="smallerMainText mainText">${date}</span>
                </div>
                <div class="currentWeather">
                    <div>
                        <div><img src="http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png" alt="Weather icon"></div>
                        <span>${data.list[0].weather[0].description}</span>
                    </div>
            
                    <div>
                        <span class="currentTemp">${Math.round(data.list[0].main.temp - kelvinDigree)}°</span>
                        <span>Real feel: ${Math.round(data.list[0].main.feels_like - kelvinDigree)}°</span>
                    </div>
            
                    <div>
                        <span>Temp min: ${Math.round(data.list[0].main.temp_min - kelvinDigree)}°</span>
                        <span>Temp max: ${Math.round(data.list[0].main.temp_max - kelvinDigree)}°</span>
                        <span>Wind speed: ${data.list[0].wind.speed} km/h</span>           
                    </div>
                </div>
            </div>
            <div class="WeatherBlock">
                <div>
                    <span class="smallerMainText mainText">hourly</span>
                </div>
                <table>
                    <thead>
                        <tr id="time">
                            <th>TODAY</th>
                        </tr>
                    </thead>
                    <tbody id="weatherData">
                        <tr id="icons">
                            <td></td>
                        </tr>
                        <tr id="forecast">
                            <td>Forecast</td>
                        </tr>
                        <tr id="temp">
                            <td>Temp (C)</td>
                        </tr>
                        <tr id="realTemp">
                            <td>RealFeel</td>
                        </tr>
                        <tr id="wind">
                            <td>Wind (km/h)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div class="WeatherBlock">
                <div><span class="smallerMainText mainText">Neaby places</span></div>
                <div class="neabyGrid">
                    <div>
                        <span>h</span>
                        <span>h</span>
                    </div>
                    <div>
                        <span>h</span>
                        <span>h</span>
                    </div>
                    <div>
                        <span>h</span>
                        <span>h</span>
                    </div>
                    <div>
                        <span>h</span>
                        <span>h</span>
                    </div>
            
                </div>
            </div>`;

            const time = document.getElementById('time');
            const icons = document.getElementById('icons');
            const forecast = document.getElementById('forecast');
            const temp = document.getElementById('temp');
            const realTemp = document.getElementById('realTemp');
            const wind = document.getElementById('wind');

            data.list.forEach(dataa => {
                let fullDate = new Date(dataa.dt_txt);
                if(fullDate.getDate() == currDate.getDate())
                {
                    const timeCell = document.createElement('th');
                    timeCell.textContent = `${fullDate.getHours()}:${fullDate.getMinutes()}0`;
                    time.appendChild(timeCell);

                    const iconCell = document.createElement('td');
                    iconCell.innerHTML = `<img src="http://openweathermap.org/img/wn/${dataa.weather[0].icon}.png" alt="Weather icon">`;
                    icons.appendChild(iconCell);

                    const forecastCell = document.createElement('td');
                    forecastCell.textContent = dataa.weather[0].description;
                    forecast.appendChild(forecastCell);

                    const tempCell = document.createElement('td');
                    tempCell.textContent = `${Math.round(dataa.main.temp - kelvinDigree)}°`;
                    temp.appendChild(tempCell);

                    const realFeelCell = document.createElement('td');
                    realFeelCell.textContent = `${Math.round(dataa.main.feels_like - kelvinDigree)}°`;
                    realTemp.appendChild(realFeelCell);

                    const windCell = document.createElement('td');
                    windCell.textContent = dataa.wind.speed;
                    wind.appendChild(windCell);
                }
        });
            // todayDiv.innerHTML = `<div id="todayDiv"><button  id="todayBtn">Today</button></div>`;
            // fiveDaysBtn.innerHTML = `<div id="fiveDaysDiv" class="bottom-border"><button id="fiveDaysBtn">5-day forecast</button></div>`;
    });
}
todayBtn.onclick = (event) => {
    toToday(api);
}


