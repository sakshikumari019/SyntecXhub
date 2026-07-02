import React from 'react'

// Single forecast card for a day.
// It displays the date, temperatures, weather text, icon, and rain chance.
export default function ForecastCard({ day }) {
  if (!day) return null

  const icon = day.condition && day.condition.icon
  const iconUrl = icon && (icon.startsWith('http') ? icon : `https:${icon}`)

  return (
    <div className="forecast-card glass">
      <div className="date">{day.date}</div>
      <img src={iconUrl} alt={day.condition.text} />
      <div className="temps">{Math.round(day.mintemp_c)}° / {Math.round(day.maxtemp_c)}°C</div>
      <div className="cond">{day.condition.text}</div>
      <div className="rain">Chance of rain: {day.daily_chance_of_rain}%</div>
    </div>
  )
}
