// File: components/AccessibilityIndicator.jsx
import React from "react";

export default function AccessibilityIndicator({ settings }) {
  const isActive = Object.values(settings).some(value => value !== false && value !== 100);
  if (!isActive) return null;

  return (
    <div
      className="fixed z-40 bg-blue-100 text-blue-800 px-3 py-1.5 
        rounded-r-full shadow-md flex items-center gap-2 font-medium text-sm
        border border-blue-200 border-l-0"
      style={{
        fontSize: '12px',
        top: 'calc(100vh * 0.7 + 60px)',
        left: '0'
      }}
    >
      <span>נגישות מופעלת</span>
      <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
    </div>
  );
}