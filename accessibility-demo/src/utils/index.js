/**
 * Utility functions for the accessibility demo
 */

/**
 * Creates a URL for a page in the application
 * 
 * @param {string} pageName - The name of the page
 * @returns {string} The URL for the page
 */
export const createPageUrl = (pageName) => {
  return `/${pageName.toLowerCase()}`;
};

/**
 * Checks if current environment is production
 * 
 * @returns {boolean} True if environment is production
 */
export const isProduction = () => {
  return process.env.NODE_ENV === 'production';
};

/**
 * Format date to localized string
 * 
 * @param {Date} date - The date to format
 * @returns {string} Formatted date string
 */
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('he-IL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}; 