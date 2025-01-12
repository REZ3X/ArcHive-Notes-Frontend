import React from 'react';
import LoginForm from '../../components/login_components/loginForm';

/**
 * Login component that renders a centered login form.
 *
 * @component
 * @returns {JSX.Element} The rendered login form component.
 */
export default function Login() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <LoginForm />
        </div>
    );
}