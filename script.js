// Function to get weather data
function getWeather() {
    let city = document.getElementById('cityInput').value; // User ne jo city input kiya, woh value le rahe hain.
    let apiKey = '0011bb15670c67393dda26532725c9fd'; // Aapki API key yahan dal diya hai.
  
    // Agar city empty hai, toh alert karo
    if (city === '') {
      alert('Please enter a city name');
      return;
    }
  
    // API URL banate hain
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    // Fetch request se weather data lete hain
    fetch(url)
      .then(response => response.json())  // Response ko JSON format mein convert karo
      .then(data => {
        // Agar data mil gaya, toh result ko show karo
        if (data.cod === 200) {
          let weatherDescription = data.weather[0].description;
          let temperature = data.main.temp;
          let humidity = data.main.humidity;
  
          // Show result on the screen
          document.getElementById('weatherResult').innerHTML = `
            <h3>Weather in ${city}</h3>
            <p>Description: ${weatherDescription}</p>
            <p>Temperature: ${temperature}°C</p>
            <p>Humidity: ${humidity}%</p>
          `;
        } else {
          // Agar city invalid hai, toh error dikhaye
          document.getElementById('weatherResult').innerHTML = `
            <p>City not found. Please try again.</p>
          `;
        }
      })
      .catch(error => {
        console.error('Error fetching weather data: ', error);
      });
  }
  