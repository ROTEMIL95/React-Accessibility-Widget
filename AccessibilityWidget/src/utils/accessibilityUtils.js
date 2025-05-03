/**
 * Accessibility utility functions
 */

/**
 * Applies accessibility settings by creating a style element with custom CSS
 * 
 * @param {Object} newSettings - The accessibility settings to apply
 */
export const applySettings = (newSettings) => {
  const styleEl = document.getElementById('accessibility-styles') || document.createElement('style');
  styleEl.id = 'accessibility-styles';
  styleEl.innerHTML = generateAccessibilityCSS(newSettings);
  
  if (!document.getElementById('accessibility-styles')) {
    document.head.appendChild(styleEl);
  }
  
  document.documentElement.style.setProperty('--base-font-size', '16px');
  
  localStorage.setItem('accessibilitySettings', JSON.stringify(newSettings));
};

/**
 * Handles the big cursor feature by adding or removing cursor styles
 * 
 * @param {boolean} isBigCursor - Whether to enable big cursor
 */
export const handleBigCursor = (isBigCursor) => {
  const oldCursorStyle = document.getElementById('big-cursor-style');
  if (oldCursorStyle) {
    oldCursorStyle.remove();
  }
  
  if (isBigCursor) {
    const cursorStyle = document.createElement('style');
    cursorStyle.id = 'big-cursor-style';
    cursorStyle.innerHTML = generateBigCursorCSS();
    document.head.appendChild(cursorStyle);
  }
};

/**
 * Get default accessibility settings
 * 
 * @returns {Object} The default accessibility settings
 */
export const getDefaultSettings = () => ({
  fontSize: 100,
  contrast: false,
  darkMode: false,
  underlineLinks: false,
  bigCursor: false,
  grayscale: false
});

/**
 * Generates CSS for the big cursor feature
 * 
 * @returns {string} The CSS for big cursor
 */
const generateBigCursorCSS = () => `
  body:not(.accessibility-widget),
  body:not(.accessibility-widget) * {
    cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='%23ffffff' stroke='%23000000' stroke-width='2'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3C/svg%3E"), auto !important;
  }
  
  body a:not(.accessibility-widget *),
  body button:not(.accessibility-widget *),
  body [role="button"]:not(.accessibility-widget *),
  body input:not(.accessibility-widget *),
  body select:not(.accessibility-widget *),
  body textarea:not(.accessibility-widget *) {
    cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='%23ffffff' stroke='%23000000' stroke-width='2'%3E%3Cpath d='M21 11l-8-8-8 8v2h6v8h4v-8h6z'/%3E%3C/svg%3E"), pointer !important;
  }
  
  .accessibility-widget,
  .accessibility-widget * {
    cursor: default !important;
  }
  
  .accessibility-widget button,
  .accessibility-widget .custom-switch,
  .accessibility-widget a {
    cursor: pointer !important;
  }
`;

/**
 * Generates CSS for accessibility features based on current settings
 * 
 * @param {Object} settings - The current accessibility settings
 * @returns {string} The CSS for accessibility features
 */
const generateAccessibilityCSS = (settings) => `
  body *:not(.accessibility-widget *) {
    font-size: calc(var(--base-font-size) * ${settings.fontSize / 100}) !important;
  }

  body h1:not(.accessibility-widget *) {
    font-size: calc(2rem * ${settings.fontSize / 100}) !important;
  }
  
  body h2:not(.accessibility-widget *) {
    font-size: calc(1.5rem * ${settings.fontSize / 100}) !important;
  }
  
  body h3:not(.accessibility-widget *) {
    font-size: calc(1.25rem * ${settings.fontSize / 100}) !important;
  }
  
  body h4:not(.accessibility-widget *) {
    font-size: calc(1.125rem * ${settings.fontSize / 100}) !important;
  }
  
  body h5:not(.accessibility-widget *) {
    font-size: calc(1rem * ${settings.fontSize / 100}) !important;
  }
  
  body h6:not(.accessibility-widget *) {
    font-size: calc(0.875rem * ${settings.fontSize / 100}) !important;
  }

  body p:not(.accessibility-widget *),
  body span:not(.accessibility-widget *),
  body div:not(.accessibility-widget *),
  body a:not(.accessibility-widget *),
  body li:not(.accessibility-widget *),
  body label:not(.accessibility-widget *),
  body input:not(.accessibility-widget *),
  body textarea:not(.accessibility-widget *),
  body button:not(.accessibility-widget *) {
    font-size: calc(1rem * ${settings.fontSize / 100}) !important;
  }

  body small:not(.accessibility-widget *),
  body .text-sm:not(.accessibility-widget *) {
    font-size: calc(0.875rem * ${settings.fontSize / 100}) !important;
  }
  
  body > *:not(.accessibility-widget):not(.accessibility-button) {
    ${settings.darkMode ? 'filter: invert(90%) hue-rotate(180deg);' : ''}
    ${settings.contrast ? 'filter: contrast(150%);' : ''}
    ${settings.grayscale ? 'filter: grayscale(100%);' : ''}
  }
  
  body > *:not(.accessibility-widget):not(.accessibility-button) img,
  body > *:not(.accessibility-widget):not(.accessibility-button) video {
    ${settings.darkMode ? 'filter: invert(100%) hue-rotate(180deg);' : ''}
  }
  
  body > *:not(.accessibility-widget):not(.accessibility-button) a {
    ${settings.underlineLinks ? `
      text-decoration: underline !important;
      text-underline-offset: 4px;
      text-decoration-thickness: 2px;
    ` : ''}
  }
  
  .accessibility-button {
    background-color: #2563eb !important;
    color: white !important;
    filter: none !important;
  }
  
  .accessibility-button:hover {
    background-color: #1d4ed8 !important;
  }
  
  .accessibility-button svg {
    color: white !important;
  }
  
  .accessibility-widget,
  .accessibility-widget * {
    font-size: 16px !important;
    color: inherit !important;
    filter: none !important;
  }
  
  .accessibility-widget h2 {
    font-size: 20px !important;
  }
  
  .accessibility-widget p {
    font-size: 14px !important;
  }
  
  .accessibility-widget .setting-label {
    font-size: 16px !important;
  }
  
  .accessibility-widget button {
    font-size: 14px !important;
  }
  
  .accessibility-widget .a11y-value {
    font-size: 14px !important;
    font-weight: 500;
  }
`;

// Reset all settings to default
export const resetSettings = (setSettings) => {
  const defaultSettings = getDefaultSettings();
  
  // Update state
  setSettings(defaultSettings);
  
  // Apply default settings
  applySettings(defaultSettings);
  
  // Handle big cursor separately
  handleBigCursor(false);
  
  // Remove from localStorage
  localStorage.removeItem('accessibilitySettings');
};
