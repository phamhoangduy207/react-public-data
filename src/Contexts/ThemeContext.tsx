import { createContext } from "react";
import ITheme from "../Interfaces/ITheme";

const ThemeContext = createContext<ITheme | null>(null);

export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;
export default ThemeContext;
