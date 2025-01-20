"use client";

import React from 'react';
import { FaSearch } from 'react-icons/fa';

/**
 * SearchBar component renders a search input field with a search icon.
 * It allows users to input search queries and updates the parent component's state.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Function} props.setSearchQuery - Function to update the search query state in the parent component.
 *
 * @example
 * // Example usage:
 * // <SearchBar setSearchQuery={setSearchQuery} />
 *
 * @returns {JSX.Element} The rendered search bar component.
 */
export default function SearchBar({ setSearchQuery }) {
    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className="flex items-center bg-white p-2 rounded shadow-md w-96 h-10 font-nunito">
            <FaSearch className="text-gray-600 mr-2" />
            <input
                type="text"
                placeholder="Search notes"
                className="w-full p-2 focus:outline-none"
                onChange={handleInputChange}
            />
        </div>
    );
}