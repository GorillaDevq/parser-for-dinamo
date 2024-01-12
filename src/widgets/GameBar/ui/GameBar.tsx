import {classNames} from "shared/lib/classNames/classNames";
import cls from './GameBar.module.scss'
import {Game} from "components/Game/Game";
import {gameArray} from "shared/assets/utils/constants";
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
                    TeamLogoA,
                    TeamLogoB,
                    DisplayDateTimeMsk,
                    ScoreA,
                    ScoreB,
                    title,
                    score,
                    firstTeamIcon,
                    secondTeamIcon,
                    ...otherProps
                }, index) => (
                    <li key ={index}>
                        <Game
                            title={DisplayDateTimeMsk}
                            score={score}
                            firstTeamIcon={TeamLogoA}
                            secondTeamIcon={TeamLogoB}
                            ScoreA={ScoreA}
                            ScoreB={ScoreB}
                            {...otherProps}
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
};