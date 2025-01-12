"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

/**
 * RegisterForm component renders a registration form with fields for username, email, and password.
 * It includes functionality to toggle password visibility.
 *
 * @component
 * @example
 * return (
 *   <RegisterForm />
 * )
 *
 * @returns {JSX.Element} The rendered registration form component.
 */
export default function RegisterForm() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md font-nunito">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Register</h1>
            <p className="text-gray-600 mb-6">Please fill in the form to create an account.</p>
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="username">Username</label>
                    <input className="w-full p-2 border border-gray-300 rounded focus:outline-none" type="text" id="username" name="username" placeholder="Enter your username" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                    <input className="w-full p-2 border border-gray-300 rounded focus:outline-none" type="email" id="email" name="email" placeholder="Enter your email" />
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
                <button className="w-full bg-gray-900 text-white p-2 rounded hover:bg-gray-700" type="submit">Register</button>
            </form>
            <p className="text-gray-600 mt-4">
                Already have an account? <Link href="/login" className="text-blue-500">Login</Link>
            </p>
        </div>
    );
}