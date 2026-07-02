import React from 'react'

// Displays current weather details in a glass card.
// It shows the location, temperature, weather icon, and useful stats.
export default function CurrentWeather({ location, current }) {
  if (!location || !current) return null

  const icon = current.condition && current.condition.icon
  const iconUrl = icon && (icon.startsWith('http') ? icon : `https:${icon}`)

  return (
    <div className="current-card glass">
      <div className="top">
        <div className="place">
          <h2>
            {location.name}
            {location.region ? `, ${location.region}` : ''}
            {location.country ? `, ${location.country}` : ''}
          </h2>
          <p className="local-time">Local: {location.localtime}</p>
        </div>
        <div className="temp">
          <img src={iconUrl} alt={current.condition.text} />
          <div className="degrees">{Math.round(current.temp_c)}°C</div>
          <div className="condition">{current.condition.text}</div>
        </div>
      </div>

      <div className="details">
        <div>Feels like: {Math.round(current.feelslike_c)}°C</div>
        <div>Humidity: {current.humidity}%</div>
        <div>Wind: {current.wind_kph} kph</div>
        <div>UV Index: {current.uv}</div>
        <div>Visibility: {current.vis_km} km</div>
      </div>
    </div>
  )
}
