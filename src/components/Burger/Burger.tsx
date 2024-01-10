import {classNames} from "shared/lib/classNames/classNames";
import cls from './Burger.module.scss'
import BurgerIcon from 'shared/assets/icons/menu.svg';
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface BurgerProps {
    className?: string;
}
export const Burger = ({className}: BurgerProps) => {
    
    return (
        <Button theme={ThemeButton.MENU}>
            <BurgerIcon
                className={classNames(cls.Burger, {}, [className])}
            />
        </Button>
    );
};