import React from 'react'
import ForecastCard from './ForecastCard'

// ForecastList displays a row of forecast cards for multiple days.
export default function ForecastList({ forecastDays }) {
  if (!forecastDays || forecastDays.length === 0) return null
  return (
    <div className="forecast-list">
      {forecastDays.map((f) => (
        <ForecastCard key={f.date} day={f.day ? { ...f.day, date: f.date } : f} />
      ))}
    </div>
  )
}
