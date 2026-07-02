import { useState } from 'react'
import { fetchForecast } from '../services/weatherService'

// Custom hook to manage weather state and fetching
// It keeps track of the search query, API data, loading state, and errors.
export default function useWeather(initialCity = '') {
  const [query, setQuery] = useState(initialCity)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // Fetch weather by city name
  // This function validates the input and loads the weather data.
  async function fetchWeather(city) {
    if (!city || !city.trim()) {
      setError('Please enter a city name')
      return
    }
    setLoading(true)
    setError(null)
    try {
      const result = await fetchForecast(city.trim())
      setData(result)
    } catch (err) {
      setError(err.message)
      setData(null)
    } finally {
      setLoading(false)
    }
  }

  return {
    query,
    setQuery,
    data,
    loading,
    error,
    fetchWeather
  }
}
