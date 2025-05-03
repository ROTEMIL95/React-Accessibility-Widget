import React from "react";

export function Separator({ className = "", orientation = "horizontal", ...props }) {
  return (
    <div
      role="separator"
      className={`
        ${orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]"}
        bg-gray-200 dark:bg-gray-700 ${className}
      `}
      {...props}
    />
  );
} 