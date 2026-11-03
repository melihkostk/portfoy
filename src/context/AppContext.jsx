import { createContext, useContext, useEffect, useState } from "react";
import { getTranslation } from "../services/translation";

const AppContext = createContext(null);

export function AppProvider({ children }) {
    const [loged, setLoged] = useState(false);
    const [authChecked, setAuthChecked] = useState(false);

    const [locale, setLocale] = useState(() => {
        try {
            const user = JSON.parse(localStorage.getItem("user"));
            return user?.data?.locale?.key || "en";
        } catch {
            return "en";
        }
    });

    useEffect(() => {
        try {
            const user = JSON.parse(localStorage.getItem("user"));
            if (!user) { setLoged(false); return; }
            setLoged(true);
        } catch {
            setLoged(false);
        } finally {
            setAuthChecked(true);
        }
    }, []);

    const [translation, setTranslation] = useState([]);
    const [translationLoaded, setTranslationLoaded] = useState(false);

    useEffect(() => {
        setTranslationLoaded(false);
        getTranslation(locale).then(setTranslation).finally(() => setTranslationLoaded(true));
    }, [locale]);

    return (
        <AppContext.Provider value={{ loged, setLoged, authChecked, locale, setLocale, translation, translationLoaded }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}