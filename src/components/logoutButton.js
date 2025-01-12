import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';

/**
 * LogoutButton component renders a button with a sign-out icon.
 * 
 * @component
 * @example
 * return (
 *   <LogoutButton />
 * )
 */
export default function LogoutButton() {
    return (
        <button className="text-gray-600 text-lg hover:text-gray-800">
            <FaSignOutAlt />
        </button>
    );
}