import { config } from "./config.js";

const searchBox = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
const weatherIcon = document.querySelector(".weather-icon");
const errorMessage = document.querySelector(".error-message");

async function checkWeather(city) {
    try {
        console.log("Fetching weather data for:", city); // Debugging log
        const response = await fetch(`${config.apiUrl}?q=${city}&units=metric&appid=${config.apiKey}`);

        if (!response.ok) {
            throw new Error(`City not found!`);
        }

        const data = await response.json();
        console.log(data); // Log the response to debug issues

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°C`;
        document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
        document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;
        document.querySelector(".description").innerHTML = data.weather[0].description;

        const iconCode = data.weather[0].icon;
        weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        errorMessage.innerHTML = ""; } catch (error) {
            console.error("Error fetching weather data:", error);
            errorMessage.innerHTML = "City not found. Please try again!";
        }
    }
    
    searchBtn.addEventListener("click", () => {
        console.log("Search button clicked!"); 
        checkWeather(searchBox.value);
    });
    
    document.addEventListener("DOMContentLoaded", () => {
        console.log("Page loaded"); 
    });