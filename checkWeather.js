const https = require('https');
const url = 'https://api.weatherapi.com/v1/forecast.json?key=8c84390c068642f7a09185825261806&q=London&days=5&aqi=yes&alerts=yes';
https.get(url, (res) => {
  let data = '';
  res.on('data', chunk => { data += chunk });
  res.on('end', () => {
    try {
      const json = JSON.parse(data);
      console.log('OK');
      console.log('location:', json.location.name, json.location.country, 'localtime:', json.location.localtime);
      console.log('current:', json.current.temp_c, json.current.feelslike_c, json.current.condition.text, 'humidity:', json.current.humidity, 'wind_kph:', json.current.wind_kph, 'uv:', json.current.uv, 'vis_km:', json.current.vis_km, 'is_day:', json.current.is_day);
      console.log('forecast-days:', json.forecast.forecastday.length);
      console.log('first-day:', json.forecast.forecastday[0].date, json.forecast.forecastday[0].day.maxtemp_c, json.forecast.forecastday[0].day.mintemp_c, json.forecast.forecastday[0].day.condition.text, 'rain:', json.forecast.forecastday[0].day.daily_chance_of_rain);
    } catch (err) {
      console.error('PARSE ERROR', err.message);
    }
  });
}).on('error', (err) => {
  console.error('REQUEST ERROR', err.message);
});
