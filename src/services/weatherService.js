import { WEATHER_API_URL, FORECAST_DAYS } from '../config'

// Fetch weather forecast from WeatherAPI.com
// This function calls the WeatherAPI endpoint and returns the parsed JSON.
// It also handles missing API key and HTTP errors with readable messages.
export async function fetchForecast(query) {
  const key = import.meta.env.VITE_WEATHER_API_KEY
  if (!key) throw new Error('Missing API key. Set VITE_WEATHER_API_KEY in .env')
  const url = `${WEATHER_API_URL}?key=${encodeURIComponent(key)}&q=${encodeURIComponent(
    query
  )}&days=${FORECAST_DAYS}&aqi=yes&alerts=yes`

  try {
    const res = await fetch(url)
    if (!res.ok) {
      // Try to parse error message from API
      const err = await res.json().catch(() => null)
      const message = err && err.error && err.error.message ? err.error.message : res.statusText
      throw new Error(message || 'Failed to fetch weather')
    }
    const data = await res.json()
    return data
  } catch (err) {
    // Rethrow with friendly message
    if (err.message && err.message.toLowerCase().includes('key')) {
      throw new Error('Invalid or missing API key')
    }
    throw new Error(err.message || 'Network error while fetching weather')
  }
}
