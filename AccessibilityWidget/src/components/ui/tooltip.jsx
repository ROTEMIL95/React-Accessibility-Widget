import React, { useState } from "react";

export function TooltipProvider({ children }) {
  return <>{children}</>;
}

export function Tooltip({ children }) {
  return <div className="relative inline-block">{children}</div>;
}

export function TooltipTrigger({ children, asChild }) {
  if (asChild) {
    return children;
  }
  return <span className="inline-block">{children}</span>;
}

export function TooltipContent({ children, side = "top", className = "" }) {
  const sideClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
  };

  return (
    <div
      className={`absolute z-50 px-3 py-1.5 text-sm rounded-md bg-black text-white shadow-lg ${
        sideClasses[side]
      } ${className}`}
    >
      {children}
      <div
        className={`absolute w-2 h-2 rotate-45 bg-inherit ${
          side === "top" ? "top-full -translate-y-1/2 left-1/2 -translate-x-1/2" :
          side === "right" ? "right-full translate-x-1/2 top-1/2 -translate-y-1/2" :
          side === "bottom" ? "bottom-full translate-y-1/2 left-1/2 -translate-x-1/2" :
          "left-full -translate-x-1/2 top-1/2 -translate-y-1/2"
        }`}
      />
    </div>
  );
} 