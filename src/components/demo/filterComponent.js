import React, { useEffect, useState } from 'react';
import projectsData from '../../dummyData/projectsDummy';

export default function FilterComponent({ setFilter }) {
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const projects = projectsData();

  return (
    <select onChange={handleFilterChange} className="focus:outline-none bg-white p-2 rounded shadow-md h-10 font-nunito">
      <option value="">All</option>
      {projects.map((project) => (
        <option key={project.id} value={project.title.toLowerCase()}>{project.title}</option>
      ))}
    </select>
  );
}