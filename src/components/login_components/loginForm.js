"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

/**
 * LoginForm component renders a login form with username and password fields.
 * It includes functionality to toggle the visibility of the password.
 *
 * @component
 * @example
 * return (
 *   <LoginForm />
 * )
 *
 * @returns {JSX.Element} The rendered login form component.
 */
export default function LoginForm() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md font-nunito">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Login</h1>
            <p className="text-gray-600 mb-6">Please enter your credentials to login.</p>
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="username">Username</label>
                    <input className="w-full p-2 border border-gray-300 rounded focus:outline-none" type="text" id="username" name="username" placeholder="Enter your username" />
                </div>
                <div className="mb-6 relative">
                    <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
                    <div className="relative">
                        <input className="w-full p-2 border border-gray-300 rounded focus:outline-none pr-10" type={passwordVisible ? "text" : "password"} id="password" name="password" placeholder="Enter your password" />
                        <button type="button" className="absolute inset-y-0 right-0 px-3 text-gray-600" onClick={togglePasswordVisibility}>
                            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                </div>
                <button className="w-full bg-gray-900 text-white p-2 rounded hover:bg-gray-700" type="submit">Login</button>
            </form>
            <p className="text-gray-600 mt-4">
                Don't have an account? <Link href="/register" className="text-blue-500">Register</Link>
            </p>
        </div>
    );
}