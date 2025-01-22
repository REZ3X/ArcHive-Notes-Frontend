import React from 'react';

/**
 * Footer component that displays a centered text with a link to the creator's website.
 * 
 * @component
 * @example
 * return (
 *   <Footer />
 * )
 * 
 * @returns {JSX.Element} A div containing the footer text and a link.
 */
export default function Footer() {
    return (
        <div className="fixed bottom-0 left-0 w-full bg-white text-center px-4 pt-4 font-nunito z-40 h-14">
            Made by <a className={`hover:underline text-blue-500`} href={`https://rejaka.me`} target={`_blank`}>rejaka.me</a>, using NextJS and NestJS
        </div>
    );
}