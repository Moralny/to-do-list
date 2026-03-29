import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        try {
            if (typeof window === "undefined") return initialValue;

            const saved = window.localStorage.getItem(key);
            return saved ? JSON.parse(saved) : initialValue;
        } catch (e) {
            console.error("Błąd odczytu localStorage:", e);
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.error("Błąd zapisu localStorage:", e);
        }
    }, [key, value]);

    return [value, setValue];
}

export default useLocalStorage;