/* eslint-disable react/prop-types */

import { createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

// 1) create a context
const DarkModeContext = createContext();

// 2) create a parentElement
function DarkModeProvider({ children }) {
    // const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    //     false,
    //     "isDarkMode",
    // );
    const [isDarkMode, setIsDarkMode] = useLocalStorageState(
        window.matchMedia("(prefers-color-sheme: dark)").matches,
        "isDarkMode",
    );

    useEffect(
        function () {
            if (isDarkMode) {
                document.documentElement.classList.add(`dark-mode`);
                document.documentElement.classList.remove(`light-mode`);
            } else {
                document.documentElement.classList.add(`light-mode`);
                document.documentElement.classList.remove(`dark-mode`);
            }
        },
        [isDarkMode],
    );

    function toggleDarkMode() {
        setIsDarkMode((isDark) => !isDark);
    }

    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
}

function useDarkMode() {
    const context = useContext(DarkModeContext);
    if (context === undefined)
        throw new Error(`DarkModeContext was used outside of DarkModeProvider`);

    return context;
}

export { DarkModeProvider, useDarkMode };
