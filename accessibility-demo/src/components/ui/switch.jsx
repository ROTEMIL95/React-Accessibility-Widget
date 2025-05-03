import React from "react";

export function Switch({ checked, onCheckedChange, className = "", ...props }) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
        checked ? "bg-blue-600 hover:bg-blue-700 active:bg-blue-800" : "bg-gray-200 hover:bg-gray-300 active:bg-gray-400"
      } ${className}`}
      onClick={() => onCheckedChange(!checked)}
      {...props}
    >
      <span
        className={`${
          checked ? "translate-x-6" : "translate-x-1"
        } inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform duration-200`}
      />
    </button>
  );
} 