# Weather Forecast App (React + Vite)

Simple, responsive weather forecast app using WeatherAPI.com.

## Setup

1. Clone or place this project directory on your machine.
2. Install dependencies:

```bash
npm install
```

3. Add your WeatherAPI key in the `.env` file at project root:

```
VITE_WEATHER_API_KEY=YOUR_API_KEY
```

4. Start the dev server:

```bash
npm run dev
```

Open the printed `localhost` URL in your browser.

## Project Structure

- `src/components` - React components
- `src/hooks` - custom hooks (`useWeather`)
- `src/services` - `weatherService.js` for API calls
- `src/styles` - CSS styles
- `src/config.js` - API URL and config

## API Integration

This app uses WeatherAPI's forecast endpoint:

`https://api.weatherapi.com/v1/forecast.json?key=KEY&q=City&days=5&aqi=yes&alerts=yes`

Required query params are included automatically.

## Error handling

- Shows friendly messages for empty search, network errors, invalid city, and missing/invalid API key.

## Example API response (fields used)

When calling WeatherAPI's `/forecast.json`, the response includes:

- `location`: `{ name, country, localtime }` — used to show city and local time.
- `current`: `{ temp_c, feelslike_c, condition: { text, icon }, humidity, wind_kph, uv, vis_km, is_day }` — used for current weather.
- `forecast.forecastday[]`: each day has `{ date, day: { maxtemp_c, mintemp_c, avgtemp_c, condition, daily_chance_of_rain } }` — used for the 5-day forecast.

Fields may vary; the app performs checks and shows clear errors when missing.

## Notes

- Do not share your API key publicly. The `.env` file is intentionally ignored by git in typical setups.
- This is a beginner-friendly codebase with clear comments.
