import React from 'react'

// SearchBar component renders the city search input and button.
// It calls onSearch when the form is submitted.
export default function SearchBar({ query, setQuery, onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        aria-label="Search city"
        placeholder="Search city (e.g., London)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  )
}
