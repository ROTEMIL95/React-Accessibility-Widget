// File: components/AccessibilityWidget.jsx
import React, { useState, useEffect } from "react";
import AccessibilityButton from "./AccessibilityButton";
import AccessibilityPanel from "./AccessibilityPanel";
import AccessibilityIndicator from "./AccessibilityIndicator";

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState({
    fontSize: 100,
    contrast: false,
    darkMode: false,
    underlineLinks: false,
    bigCursor: false,
    grayscale: false,
  });

  useEffect(() => {
    applySettings(settings);
  }, [settings]);

  useEffect(() => {
    const savedSettings = localStorage.getItem("accessibilitySettings");
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(parsed);
      } catch (err) {
        console.error("Failed to parse saved accessibility settings:", err);
      }
    }
  }, []);

  const applySettings = (newSettings) => {
    const styleEl = document.getElementById("accessibility-styles") || document.createElement("style");
    styleEl.id = "accessibility-styles";
    styleEl.innerHTML = generateAccessibilityCSS(newSettings);
    if (!document.getElementById("accessibility-styles")) document.head.appendChild(styleEl);
    document.documentElement.style.setProperty("--base-font-size", "16px");
    localStorage.setItem("accessibilitySettings", JSON.stringify(newSettings));
  };

  const generateAccessibilityCSS = (settings) => `
    body *:not(.accessibility-widget *):not(.accessibility-button):not(.accessibility-indicator):not(.accessibility-panel *):not(.accessibility-panel) {
      font-size: calc(var(--base-font-size) * ${settings.fontSize / 100}) !important;
    }
    body > *:not(.accessibility-widget):not(.accessibility-button):not(.accessibility-indicator):not(.accessibility-panel) {
      ${settings.grayscale ? "filter: grayscale(100%);" : ""}
    }
    body:not(.accessibility-widget):not(.accessibility-button):not(.accessibility-indicator):not(.accessibility-panel) {
      ${settings.darkMode ? "filter: invert(90%) hue-rotate(180deg);" : ""}
      ${settings.contrast ? "filter: contrast(150%);" : ""}
    }
    body:not(.accessibility-widget):not(.accessibility-button):not(.accessibility-indicator):not(.accessibility-panel) a {
      ${settings.underlineLinks ? "text-decoration: underline !important;" : ""}
    }
  `;

  const handleBigCursor = (enabled) => {
    const existing = document.getElementById("big-cursor-style");
    if (existing) existing.remove();
    if (enabled) {
      const cursorStyle = document.createElement("style");
      cursorStyle.id = "big-cursor-style";
      cursorStyle.innerHTML = `
        body *:not(.accessibility-widget *) {
          cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='%23ffffff' stroke='%23000000' stroke-width='2'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3C/svg%3E"), auto !important;
        }
      `;
      document.head.appendChild(cursorStyle);
    }
  };

  const updateSettings = (key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const resetSettings = () => {
    const defaults = {
      fontSize: 100,
      contrast: false,
      darkMode: false,
      underlineLinks: false,
      bigCursor: false,
      grayscale: false,
    };
    setSettings(defaults);
    localStorage.removeItem("accessibilitySettings");
  };

  return (
    <>
      <AccessibilityButton isOpen={isOpen} setIsOpen={setIsOpen} settings={settings} />
      <AccessibilityPanel
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        settings={settings}
        updateSettings={updateSettings}
        resetSettings={resetSettings}
        handleBigCursor={handleBigCursor}
      />
      <AccessibilityIndicator settings={settings} />
    </>
  );
}
