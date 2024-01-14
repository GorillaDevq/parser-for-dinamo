import {classNames} from "shared/lib/classNames/classNames";
import cls from './GameBar.module.scss'
import {Game} from "components/Game/Game";
import {Gif} from "components/Gif/Gif";
import {useContext} from "react";
import {GamesContext} from "app/providers/GamesProvider/lib/GamesContext";

interface GameBarProps {
    className?: string;
}
export const GameBar = ({className}: GameBarProps) => {
    const gamesArray = useContext(GamesContext)

    return (
        <section className={classNames(cls.GameBar, {}, [className])}>
            <Gif />
            <ul className={cls.widget}>
                {gamesArray.map(({
                    ...otherProps
                }, index) => (
                    <li key ={index}>
                        <Game
                            {...otherProps}
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
};