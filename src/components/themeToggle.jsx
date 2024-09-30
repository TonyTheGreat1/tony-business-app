import React from "react";

function ThemeToggle({ isDark, onToggle }) {
    return (
        <button className={`toggle-button ${isDark ? 'dark-mode' : 'light-mode'}`} onClick={onToggle}>
            {isDarkMode ? 'switch to light mode' : 'switch to dark mode'}
        </button>
    )
}

export default ThemeToggle