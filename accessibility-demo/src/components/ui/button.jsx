import React from "react";

export function Button({ 
  children, 
  variant = "default", 
  size = "default", 
  className = "", 
  onClick, 
  ...props 
}) {
  const variantClasses = {
    default: "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 shadow-sm hover:shadow-md transition-all duration-200",
    outline: "bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 active:bg-gray-100 shadow-sm",
    ghost: "bg-transparent hover:bg-gray-100 active:bg-gray-200 text-gray-700",
  };

  const sizeClasses = {
    default: "py-2 px-4 text-sm h-10",
    sm: "py-1.5 px-3 text-xs h-8",
    lg: "py-3 px-6 text-base h-12",
    icon: "p-2 h-10 w-10",
  };

  const baseClasses = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant] || ""} ${sizeClasses[size] || ""} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
} 