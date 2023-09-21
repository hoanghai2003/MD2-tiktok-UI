import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { useLocalStorage } from '~/hooks';
import styles from './ThemeMode.module.scss';

const cx = classNames.bind(styles);

function ThemeMode() {
    const { dataStorage, setDataStorage } = useLocalStorage();
    const [isDarkMode, setIsDarkMode] = useState(dataStorage.theme === 'dark');

    const themeToggle = () => {
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        const themeData = {
            theme: 'light',
        };

        if (isDarkMode) {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeData.theme = 'dark';
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }

        setDataStorage(themeData);
    }, [isDarkMode, setDataStorage]);

    return (
        <div>
            <input type="checkbox" id={cx('theme-input')} hidden checked={isDarkMode} onChange={themeToggle} />
            <label className={cx('switch')} htmlFor={cx('theme-input')}></label>
        </div>
    );
}

export default ThemeMode;
