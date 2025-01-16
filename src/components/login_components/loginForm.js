"use client"; // Mark as a client component

import React, { useState } from "react";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function LoginForm() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (data.token) {
                localStorage.setItem("authToken", data.token);
                window.location.href = "/"; // Redirect to home
            } else {
                console.error("Login failed:", data.message);
            }
        } catch (error) {
            console.error("Error logging in:", error);
        }
    };

    return (
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md font-nunito">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Login</h1>
            <p className="text-gray-600 mb-6">Please enter your credentials to login.</p>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="username">
                        Username
                    </label>
                    <input
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none"
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Enter your username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-6 relative">
                    <label className="block text-gray-700 mb-2" htmlFor="password">
                        Password
                    </label>
                    <div className="relative">
                        <input
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none pr-10"
                            type={passwordVisible ? "text" : "password"}
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-0 px-3 text-gray-600"
                            onClick={togglePasswordVisibility}
                        >
                            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                </div>
                <button className="w-full bg-gray-900 text-white p-2 rounded hover:bg-gray-700" type="submit">
                    Login
                </button>
            </form>
            <p className="text-gray-600 mt-4">
                Don't have an account?{" "}
                <Link href="/register" className="text-blue-500">
                    Register
                </Link>
            </p>
        </div>
    );
}
