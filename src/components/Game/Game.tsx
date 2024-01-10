import {classNames} from "shared/lib/classNames/classNames";
import cls from './Game.module.scss';
import {Button, ThemeButton} from "shared/ui/Button/Button";
import StatIcon from "shared/assets/icons/stat-icon.svg";

interface GameProps {
    className?: string;
    title: string;
    score: string;
    firstTeamIcon: string;
    secondTeamIcon: string;
}
export const Game = (props: GameProps) => {
    const {
        className,
        title,
        score,
        firstTeamIcon,
        secondTeamIcon
    } = props;
    
    return (
        <div className={classNames(cls.Game, {}, [className])}>
            <h3 className={cls.title}>{title}</h3>
            <div className={cls.gameContainer}>
                <div
                    style={{backgroundImage: `url(${firstTeamIcon})`}}
                    className={cls.firstTeamImage}
                />
                <div className={cls.score}>
                    {score}
                </div>
                <div
                    style={{backgroundImage: `url(${secondTeamIcon})`}}
                    className={cls.secondTeamImage}
                />
            </div>
            <Button
                theme={ThemeButton.GAME}
            >
                <StatIcon className={cls.statIcon}/>
                Полная статистика матча
            </Button>
        </div>
    );
};