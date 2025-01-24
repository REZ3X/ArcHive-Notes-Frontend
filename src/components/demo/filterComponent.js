import React, { useEffect, useState } from 'react';

export default function FilterComponent({ setFilter }) {
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <select onChange={handleFilterChange} className="focus:outline-none bg-white p-2 rounded shadow-md h-10 font-nunito">
      <option value="">All</option>
      <option value="project1">Project 1</option>
      <option value="project2">Project 2</option>
      <option value="project3">Project 3</option>
    </select>
  );
}