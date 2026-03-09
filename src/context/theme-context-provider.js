import React, { useEffect, useState } from "react";
import { ThemeContext, ThemeContextDefault } from "./theme-context";

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(ThemeContextDefault);

    const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    };

    const attachTheme = () => {
        document.documentElement.setAttribute('data-theme', theme);
        document.documentElement.setAttribute('data-bs-theme', theme);
    }

    useEffect(() => {
        attachTheme();
    }, [theme]);

    return (
        <ThemeContext value={ [theme, toggleTheme] }>
            { children }
        </ThemeContext>
    );
}
