import {classNames} from "shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss'
import {Theme, useTheme} from "app/providers/ThemeProvider";
import DarkIcon from 'shared/assets/icons/teamIcons/groznyi-logo.png';
import LightIcon from 'shared/assets/icons/logo.svg';
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string;
}
export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();
    
    return (
        <Button
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick = {toggleTheme}
            theme={ThemeButton.MENU}
        >
            {
                theme === Theme.LIGHT
                    ? <LightIcon />
                    : <img
                        src={DarkIcon}
                        className={cls.logo}
                        alt={'Тёмный логотип баскетбольного Динамо г. Грозный'}
                    />
            }
        </Button>
    );
};