import React from 'react';

export function Button({ children, className, ...props }) {
  return (
    <button className={`px-4 py-2 rounded-md shadow-md ${className}`} {...props}>
      {children}
    </button>
  );
}