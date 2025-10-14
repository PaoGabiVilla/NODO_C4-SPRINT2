// components/Button.jsx
import React from "react";

const Button = ({ onClick, children, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md font-medium transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
