import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages';

export default function App() {

    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }, []);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.remove("bg-gray-200");
            document.documentElement.classList.add("dark");
            document.documentElement.classList.add("bg-gray-900");
        }
        else {
            document.documentElement.classList.add("bg-gray-200");
            document.documentElement.classList.remove("dark");
            document.documentElement.classList.remove("bg-gray-900");
        }
    }, [theme]);

    return (
        <Routes>
            <Route path="/" element={<Home ThemeChangingHandler={toggleTheme} Theme={theme} />} />
        </Routes>
    )
}
