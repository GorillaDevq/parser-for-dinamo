import {classNames} from "shared/lib/classNames/classNames";
import cls from './GameBar.module.scss'
import {Game} from "components/Game/Game";
import {gameArray} from "shared/assets/utils/constants";
import {Gif} from "components/Gif/Gif";

interface GameBarProps {
    className?: string;
}
export const GameBar = ({className}: GameBarProps) => {
    
    return (
        <section className={classNames(cls.GameBar, {}, [className])}>
            <Gif />
            <ul className={cls.widget}>
                {gameArray.map(({
                                    title,
                                    score,
                                    firstTeamIcon,
                                    secondTeamIcon,
                                }, index) => (
                    <li key ={index}>
                        <Game
                            title={title}
                            score={score}
                            firstTeamIcon={firstTeamIcon}
                            secondTeamIcon={secondTeamIcon} />
                    </li>
                ))}
            </ul>
        </section>
    );
};