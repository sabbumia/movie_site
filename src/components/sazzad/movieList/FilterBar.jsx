// import React, { useState } from 'react';

// function FilterBar({ movies, onFilter }) {
//   const [query, setQuery] = useState('');       // Movie name search query
//   const [year, setYear] = useState('');         // Year filter
//   const [category, setCategory] = useState('');  // Category filter

//   const handleFilter = () => {
//     const filtered = movies.filter(movie =>
//       // Apply filters: Check if name includes query, year matches, category matches
//       (!query || movie.name.toLowerCase().includes(query.toLowerCase())) &&
//       (!year || movie.year.toString() === year) &&
//       (!category || movie.category === category)
//     );
//     onFilter(filtered); // Pass filtered movies to parent component
//   };

//   return (
//     <div className="filter-bar">
//       <input
//         type="text"
//         placeholder="Search movies..."
//         value={query}
//         onChange={e => setQuery(e.target.value)} // Update search query
//       />
//       <select onChange={e => setYear(e.target.value)} value={year}>
//         <option value="">Year</option>
//         {/* Add dynamic year options if needed */}
//         <option value="2010">2010</option>
//         <option value="2008">2008</option>
//         <option value="2014">2014</option>
//       </select>
//       <select onChange={e => setCategory(e.target.value)} value={category}>
//         <option value="">Category</option>
//         {/* Add dynamic category options if needed */}
//         <option value="Sci-Fi">Sci-Fi</option>
//         <option value="Action">Action</option>
//       </select>
//       <button onClick={handleFilter}>Filter</button>
//     </div>
//   );
// }

// export default FilterBar;


// FilterBar.jsx
import React, { useState } from 'react';

function FilterBar({ movies, onFilter }) {
  const [query, setQuery] = useState('');       // Movie name search query
  const [year, setYear] = useState('');         // Year filter
  const [category, setCategory] = useState('');  // Category filter
  const [type, setType] = useState('');          // Type filter

  const handleFilter = () => {
    const filtered = movies.filter(movie =>
      // Apply filters: Check if name includes query, year matches, category matches, and type matches
      (!query || movie.name.toLowerCase().includes(query.toLowerCase())) &&
      (!year || movie.year === year) &&
      (!category || movie.category === category) &&
      (!type || movie.type === type)
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
        {/* Add dynamic year options based on movies in your database */}
        {movies.map((movie, index) => (
          <option key={index} value={movie.year}>{movie.year}</option>
        ))}
      </select>
      <select onChange={e => setCategory(e.target.value)} value={category}>
        <option value="">Category</option>
        <option value="Action">Action</option>
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Animation">Animation</option>
        <option value="Comedy">Comedy</option>
        <option value="Drama">Drama</option>
        <option value="Crime">Crime</option>
        {/* Add dynamic categories if needed */}
      </select>
      <select onChange={e => setType(e.target.value)} value={type}>
        <option value="">Type</option>
        <option value="Hollywood">Hollywood</option>
        <option value="Bollywood">Bollywood</option>
        {/* Add dynamic type options if needed */}
      </select>
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
}

export default FilterBar;
