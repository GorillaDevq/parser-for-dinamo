import {classNames} from "shared/lib/classNames/classNames";
import cls from './Game.module.scss';
import {Button, ThemeButton} from "shared/ui/Button/Button";
import StatIcon from "shared/assets/icons/stat-icon.svg";

interface GameProps extends TeamGameData{
    className?: string;
}

export const Game = (props: GameProps) => {
    const {
        className,
        GameStatus,
        DisplayDateTimeMsk,
        TeamLogoA,
        TeamLogoB,
        ScoreA,
        ScoreB,
    } = props;

    return (
        <div className={classNames(cls.Game, {}, [className])}>
            <h3 className={cls.title}>{DisplayDateTimeMsk}</h3>
            <div className={cls.gameContainer}>
                <div
                    style={{backgroundImage: `url(${TeamLogoA})`}}
                    className={cls.firstTeamImage}
                />
                {GameStatus
                    ? (<div className={cls.score}>{`${ScoreA} : ${ScoreB}`}</div>)
                    : (<div className={cls.score}>Купить билет</div>)
                }
                <div
                    style={{backgroundImage: `url(${TeamLogoB})`}}
                    className={cls.secondTeamImage}
                />
            </div>
            {GameStatus === 1 &&
                <Button theme={ThemeButton.GAME}>
                    <StatIcon className={cls.statIcon}/>
                    Полная статистика матча
                </Button>
            }
        </div>
    );
};