
const STORAGE_KEY = 'ontario_re_tool_state';
const THEME_KEY = 'ontario_re_tool_theme';

export function saveTransactionState(state) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        // debug
        console.log('State saved:', state);
    } catch (e) {
        console.error('Error saving state:', e);
    }
}

export function loadTransactionState() {
    try {
        const serialized = localStorage.getItem(STORAGE_KEY);
        return serialized ? JSON.parse(serialized) : null;
    } catch (e) {
        console.error('Error loading state:', e);
        return null;
    }
}

export function clearTransactionState() {
    localStorage.removeItem(STORAGE_KEY);
}

export function saveTheme(theme) {
    localStorage.setItem(THEME_KEY, theme);
}

export function loadTheme() {
    return localStorage.getItem(THEME_KEY) || 'light';
}
