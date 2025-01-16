"use client"; // Mark as a client component

import React from "react";
import LoginForm from "@/components/login_components/loginForm";

export default function Login() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <LoginForm />
        </div>
    );
}
