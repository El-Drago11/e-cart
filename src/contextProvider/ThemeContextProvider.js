'use client'

const { createContext, useContext, useState, useEffect } = require("react");

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {

    const [getTheme, setTheme] = useState('light')

    useEffect(() => {
        const saved = localStorage.getItem('theme');
        const initial = saved || 'light';
        setTheme(initial);
    }, []);

    useEffect(() => {
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(getTheme);
        localStorage.setItem('theme', getTheme);
    }, [getTheme]);

    return (
        <ThemeContext.Provider value={{ getTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContextProvider = () => useContext(ThemeContext)