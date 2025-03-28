# Weather Forecast Application
Youtube video link : https://youtu.be/ehYllWe4Y5w
## Overview

I created this Weather Forecast Application to provide real-time weather updates based on city input. It fetches weather data from the OpenWeatherMap API and displays key weather details, including temperature, humidity, wind speed, and weather conditions with dynamic icons. The goal was to make it user-friendly, responsive, and lightweight.

## Features

- 🌍 **Search by City:** Enter a city name to get the latest weather updates.
- ⛅ **Real-time Weather Updates:** Fetches live data from the OpenWeatherMap API.
- 🌦 **Dynamic Weather Icons:** Displays weather conditions with changing icons.
- 📍 **Geolocation Support:** Detects the user's location for automatic weather updates.
- 📱 **Responsive Design:** Works smoothly on desktop, tablet, and mobile devices.
- ⚡ **Fast & Lightweight:** Built using HTML, CSS, and JavaScript for efficiency.

## Technologies Used

- **Frontend:** HTML, CSS, JavaScript
- **API:** OpenWeatherMap API
- **Deployment:** Web Server-01 & Web Server-02
- **Load Balancing:** Nginx to efficiently distribute traffic between servers

## Deployment Details

I deployed the application on two web servers (Web Server-01 & Web Server-02) and set up a load balancer (Nginx) to manage incoming requests. This setup ensures:

- Even request distribution to prevent overloading a single server
- High availability and better performance
- Reliable access, even if one server goes down

## How to Use

1. Open the application in your web browser.
2. Enter a city name in the search box.
3. Click the search button to fetch weather data.
4. View real-time weather conditions, including temperature, humidity, wind speed, and a weather icon.

## Setup & Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/h-mutumwinka/web-infrastucture.git
   ```
2. Navigate to the weather project folder:
   ```sh
   cd web-infrastucture/app
   ```
3. Open `index.html` in a browser to run the application locally.

## API Configuration

To use the OpenWeatherMap API, get an API key and replace it in your JavaScript file:

```js
const config = {
    apiUrl: "https://api.openweathermap.org/data/2.5/weather",
    apiKey: "YOUR_API_KEY"
};
```

## Future Improvements

- Add a 5-day weather forecast feature
- Implement dark mode support
- Include additional weather details like UV index and air quality

## Acknowledgments

- OpenWeatherMap for providing the weather data
- Nginx for efficient load balancing
  
## Challenges
-trying to make web servers respond to user was very hard for me .

Enjoy forecasting the weather! 🌤️


