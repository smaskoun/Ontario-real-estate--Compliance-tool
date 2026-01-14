/**
 * Local storage utilities for transaction state persistence
 * @module js/modules/storage
 */

const STORAGE_KEY = 'ontario_re_tool_state';
const THEME_KEY = 'ontario_re_tool_theme';

/**
 * Saves transaction state to localStorage
 * @param {Object} state - The transaction state to save
 * @returns {boolean} True if save was successful, false otherwise
 */
export function saveTransactionState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    console.log('State saved:', state);
    return true;
  } catch (e) {
    if (e.name === 'QuotaExceededError') {
      console.error('Error saving state: Storage quota exceeded');
      alert('Unable to save transaction state: Storage quota exceeded. Please clear browser data.');
    } else {
      console.error('Error saving state:', e);
    }
    return false;
  }
}

/**
 * Loads transaction state from localStorage
 * @returns {Object|null} The saved transaction state, or null if not found or invalid
 */
export function loadTransactionState() {
  try {
    const serialized = localStorage.getItem(STORAGE_KEY);
    if (!serialized) {
      return null;
    }
    return JSON.parse(serialized);
  } catch (e) {
    console.error('Error loading state:', e);
    // Clear corrupted data
    clearTransactionState();
    return null;
  }
}

/**
 * Clears saved transaction state from localStorage
 * @returns {boolean} True if clear was successful
 */
export function clearTransactionState() {
  try {
    localStorage.removeItem(STORAGE_KEY);
    console.log('Transaction state cleared');
    return true;
  } catch (e) {
    console.error('Error clearing state:', e);
    return false;
  }
}

/**
 * Saves theme preference to localStorage
 * @param {string} theme - The theme to save ('light' or 'dark')
 * @returns {boolean} True if save was successful
 */
export function saveTheme(theme) {
  try {
    localStorage.setItem(THEME_KEY, theme);
    return true;
  } catch (e) {
    console.error('Error saving theme:', e);
    return false;
  }
}

/**
 * Loads theme preference from localStorage
 * @returns {string} The saved theme, or 'light' as default
 */
export function loadTheme() {
  try {
    return localStorage.getItem(THEME_KEY) || 'light';
  } catch (e) {
    console.error('Error loading theme:', e);
    return 'light';
  }
}
