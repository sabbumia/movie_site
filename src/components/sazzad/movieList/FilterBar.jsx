import React, { useState } from 'react';

function FilterBar({ movies, onFilter }) {
  const [query, setQuery] = useState('');       // Movie name search query
  const [year, setYear] = useState('');         // Year filter
  const [category, setCategory] = useState('');  // Category filter

  const handleFilter = () => {
    const filtered = movies.filter(movie =>
      // Apply filters: Check if name includes query, year matches, category matches
      (!query || movie.name.toLowerCase().includes(query.toLowerCase())) &&
      (!year || movie.year.toString() === year) &&
      (!category || movie.category === category)
    );
    onFilter(filtered); // Pass filtered movies to parent component
  };

  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={e => setQuery(e.target.value)} // Update search query
      />
      <select onChange={e => setYear(e.target.value)} value={year}>
        <option value="">Year</option>
        {/* Add dynamic year options if needed */}
        <option value="2010">2010</option>
        <option value="2008">2008</option>
        <option value="2014">2014</option>
      </select>
      <select onChange={e => setCategory(e.target.value)} value={category}>
        <option value="">Category</option>
        {/* Add dynamic category options if needed */}
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Action">Action</option>
      </select>
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
}

export default FilterBar;
