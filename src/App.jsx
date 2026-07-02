import React, { useEffect } from 'react'
import useWeather from './hooks/useWeather'
import SearchBar from './components/SearchBar'
import CurrentWeather from './components/CurrentWeather'
import ForecastList from './components/ForecastList'
import Loader from './components/Loader'

// Map condition text to background classes
// This helper returns a CSS class based on the weather description.
function getBackgroundClass(conditionText, isDay = 1) {
  const text = (conditionText || '').toLowerCase()
  if (!isDay) return 'bg-night'
  if (text.includes('sun') || text.includes('clear')) return 'bg-sunny'
  if (text.includes('cloud') || text.includes('overcast')) return 'bg-cloudy'
  if (text.includes('rain') || text.includes('drizzle') || text.includes('thunder')) return 'bg-rainy'
  if (text.includes('snow') || text.includes('sleet') || text.includes('blizzard')) return 'bg-snowy'
  return 'bg-default'
}

// Main app component
export default function App() {
  const { query, setQuery, data, loading, error, fetchWeather } = useWeather('')

  useEffect(() => {
    // Optionally load a default city on first load
    // fetchWeather('New York')
  }, [])

  const current = data && data.current
  const location = data && data.location
  const forecastDays = data && data.forecast && data.forecast.forecastday

  const bgClass = getBackgroundClass(current?.condition?.text, current?.is_day)

  return (
    <div className={`app ${bgClass}`}>
      <div className="container">
        <h1 className="title">Weather Forecast</h1>
        <SearchBar query={query} setQuery={setQuery} onSearch={fetchWeather} />

        {loading && <Loader />}

        {error && <div className="error">{error}</div>}

        {!loading && !error && current && (
          <>
            <CurrentWeather location={location} current={current} />
            <h3 className="forecast-title">5-Day Forecast</h3>
            <ForecastList forecastDays={forecastDays} />
          </>
        )}
      </div>
    </div>
  )
}
