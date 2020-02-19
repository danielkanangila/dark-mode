import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarMode = value  => {
    const [isDarkModeEnabled, setIsDarkModeEnabled] = useLocalStorage('isDarkModeEnabled', false);

    useEffect(() => {
        if (isDarkModeEnabled) {
            document.body.className += 'dark-mode'
        } else {
            document.body.className = document.body.className.replace('dark-mode', '');
        }
    }, [isDarkModeEnabled])

    const enabledDarkMode = value => {
        setIsDarkModeEnabled(value)
    }
    
    return [isDarkModeEnabled, enabledDarkMode];
};