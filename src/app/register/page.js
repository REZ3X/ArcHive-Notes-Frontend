import React from 'react';
import RegisterForm from '../../components/register_components/registerForm';

/**
 * Register component renders a full-screen centered registration form.
 *
 * @component
 * @example
 * return (
 *   <Register />
 * )
 */
export default function Register() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <RegisterForm />
        </div>
    );
}