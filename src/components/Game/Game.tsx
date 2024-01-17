import {classNames} from "shared/lib/classNames/classNames";
import cls from './Game.module.scss';
import {Button, ThemeButton} from "shared/ui/Button/Button";
import StatIcon from "shared/assets/icons/stat-icon.svg";
import {PopupState} from "widgets/GameProtocol";
import {Dispatch, SetStateAction} from "react";

interface GameProps {
    className?: string;
    popupState?: PopupState;
    setPopupState?: Dispatch<SetStateAction<PopupState>>;
    protocol: boolean;
    game: TeamGameData;
}

export const Game = (props: GameProps) => {
    const { className, game, protocol, setPopupState, popupState } = props;

    const {
        GameStatus, DisplayDateTimeMsk,
        TeamLogoA, TeamLogoB,
        ScoreA, ScoreB, GameID
    } = game

    const onClickProtocol = () => {
        setPopupState({
            ...popupState,
            gameId: GameID,
            gameInfo: game,
            isOpen: true,
        })
    }

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
            {GameStatus === 1 && protocol &&
                <Button theme={ThemeButton.GAME} onClick={onClickProtocol}>
                    <StatIcon className={cls.statIcon}/>
                    Полная статистика матча
                </Button>
            }
        </div>
    );
};