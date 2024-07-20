import { createContext, useState } from "react";

// CPC - Create, Provide and Consume

// C - Create
export const ThemeContext = createContext();

// P - Provide
export const  ThemeContextProviderFunction = ({children}) => {
    const [theme, setTheme] = useState("light")

    const themeUpdaterFunction = () => {
        setTheme(theme == "light" ? "dark" : "light")
    }
   
    return <ThemeContext.Provider value={{theme, themeUpdaterFunction}}>{children}</ThemeContext.Provider>
}