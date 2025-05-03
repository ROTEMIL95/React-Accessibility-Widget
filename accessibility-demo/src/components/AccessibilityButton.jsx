// File: components/AccessibilityButton.jsx
import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";
import { Accessibility } from "lucide-react";

export default function AccessibilityButton({ isOpen, setIsOpen, settings }) {
  const { language } = useLanguage();
  const t = translations[language];
  const isActive = Object.values(settings).some(value => value !== false && value !== 100);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className={`fixed left-0 z-50 rounded-r-full h-14 w-14 overflow-hidden shadow-lg 
        bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 
        accessibility-button transition-all duration-300 ease-in-out
        hover:w-auto hover:px-4 hover:shadow-xl
        flex items-center justify-center gap-0 hover:gap-2
        border-2 border-white border-l-0
        group
        ${isActive ? 'ring-4 ring-blue-200' : ''}`}
      style={{ top: 'calc(100vh * 0.7)' }}
      aria-label={t.accessibility}
    >
      <Accessibility className="h-8 w-8 text-white transform transition-transform duration-300 group-hover:scale-125" />
      <span className="font-medium text-white whitespace-nowrap w-0 overflow-hidden opacity-0 group-hover:w-auto group-hover:opacity-100 transition-all duration-300">
        {t.accessibility}
      </span>
      {isActive && (
        <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full border-2 border-white" />
      )}
    </button>
  );
}

