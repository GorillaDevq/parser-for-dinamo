import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
//import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import TicketIcon from "shared/assets/icons/ticket-icon.svg";
import {Burger} from "components/Burger/Burger";

interface NavbarProps {
    className?: string;
}
export const Navbar = ({className}: NavbarProps) => {

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher />
            <TicketIcon className={cls.ticket}/>
            <Burger />

            {/*<div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to='/about'>Состав</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to='/'>Главная</AppLink>
            </div>*/}
        </div>
    );
};