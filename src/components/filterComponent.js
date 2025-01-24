import React, { useEffect, useState } from 'react';

export default function FilterComponent({ setFilter }) {
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    async function fetchFilters() {
      try {
        const response = await fetch('http://localhost:5000/filters');
        const data = await response.json();
        setFilters(data);
      } catch (error) {
        console.error('Error fetching filters:', error);
      }
    }

    fetchFilters();
  }, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <select onChange={handleFilterChange} className="focus:outline-none bg-white p-2 rounded shadow-md h-10 font-nunito">
      <option value="">All</option>
      {filters.map(filter => (
        <option key={filter.id} value={filter.value}>{filter.label}</option>
      ))}
    </select>
  );
}