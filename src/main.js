import React from "react";
import { createRoot } from 'react-dom/client';
import { AppRouter } from "./components/app-router";
import './styles/index.scss';
import { ThemeProvider } from "./context/theme-context-provider";

const appRoot = createRoot(document.querySelector('#root'));

appRoot.render(
    <React.StrictMode>
        <ThemeProvider>
            <AppRouter/>
        </ThemeProvider>
    </React.StrictMode>
);
