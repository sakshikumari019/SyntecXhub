import React from 'react'

// Loader component shows a spinning indicator while data loads.
export default function Loader() {
  return (
    <div className="loader" role="status" aria-label="Loading">
      <div className="spinner" />
    </div>
  )
}
