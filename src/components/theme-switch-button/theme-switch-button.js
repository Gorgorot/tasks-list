import React from "react";
import { LightbulbFill } from "react-bootstrap-icons";
import { useTheme } from "../../hooks/use-theme";

export function ThemeSwitchButton() {
    const [theme, setTheme] = useTheme();

    const onToggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";

        setTheme(newTheme);
    }

    const themeSwitchIconColor = theme === 'dark' ? '#935123' : '#f88638';

    return (
        <LightbulbFill className="icon-button" color={ themeSwitchIconColor } size={ 20 } onClick={ onToggleTheme }/>
    );
}
