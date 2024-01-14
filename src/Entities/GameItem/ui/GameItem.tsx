import {Dispatch, FC, SetStateAction} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './GameItem.module.scss';
import {Button, ThemeButton} from "shared/ui/Button/Button";
import StatIcon from "shared/assets/icons/stat-icon.svg";
import {PopupState, useProtocol} from "widgets/GameProtocol";

interface GameItemProps {
    className?: string;
    popupState?: PopupState;
    setPopupState?: Dispatch<SetStateAction<PopupState>>;
    protocol: boolean;
    game: TeamGameData;
}

export const GameItem: FC<GameItemProps> = (GameItemProps) => {
    const {className, game, popupState, setPopupState, protocol} = GameItemProps;
    const {
        GameID,
        DisplayDateTimeMsk,
        GameStatus,
        RegionRu,
        ArenaRu,
        CompNameRu,
        TeamLogoA,
        TeamLogoB,
        CompTeamNameAru,
        CompTeamNameBru,
        ScoreA,
        ScoreB,
    } = game;

    const onClickProtocol = () => {
        setPopupState({
            ...popupState,
            gameId: GameID,
            gameInfo: game,
            isOpen: true,
        })
    }

    return (
        <div className={classNames(cls.GameItem, {}, [className])}>
            <div className={classNames(cls.gameItem__head)}>
                <h2 className={classNames(cls.gameItem__title)}>{`${DisplayDateTimeMsk}, ${RegionRu}, ${ArenaRu}`}</h2>
                <p className={classNames(cls.gameItem__subtitle)}>{CompNameRu}</p>
            </div>
            <ul className={classNames(cls.gameItem__body)}>
                <li className={classNames(cls.gameItem__team)}>
                    <img src={TeamLogoA} className={classNames(cls.gameItem__logo)}/>
                    <p className={classNames(cls.gameItem__name)}>{CompTeamNameAru}</p>
                </li>
                <li className={classNames(cls.gameItem__score)}>
                    {`${ScoreA} : ${ScoreB}`}
                </li>
                <li className={classNames(cls.gameItem__team)}>
                    <p className={classNames(cls.gameItem__name)}>{CompTeamNameBru}</p>
                    <img src={TeamLogoB} className={classNames(cls.gameItem__logo)}/>
                </li>
            </ul>
            {GameStatus === 1 && protocol &&
                <Button theme={ThemeButton.GAME} onClick={onClickProtocol}>
                    <StatIcon className={cls.statIcon}/>
                    Полная статистика матча
                </Button>
            }
        </div>
    );
};