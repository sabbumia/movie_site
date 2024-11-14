import React, { useState } from 'react';

function FilterBar({ movies, onFilter }) {
  const [query, setQuery] = useState('');
  const [year, setYear] = useState('');
  const [category, setCategory] = useState('');

  const handleFilter = () => {
    const filtered = movies.filter(movie =>
      (!query || movie.name.toLowerCase().includes(query.toLowerCase())) &&
      (!year || movie.year.toString() === year) &&
      (!category || movie.category === category)
    );
    onFilter(filtered);
  };

  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <select onChange={e => setYear(e.target.value)} value={year}>
        <option value="">Year</option>
        <option value="2010">2010</option>
        <option value="2008">2008</option>
        <option value="2014">2014</option>
      </select>
      <select onChange={e => setCategory(e.target.value)} value={category}>
        <option value="">Category</option>
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Action">Action</option>
      </select>
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
}

export default FilterBar;
