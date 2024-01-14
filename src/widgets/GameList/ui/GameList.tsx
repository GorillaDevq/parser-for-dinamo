import {FC, useContext} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './GameList.module.scss';
import {GamesContext} from "app/providers/GamesProvider/lib/GamesContext";
import {GameItem} from "Entities/GameItem";
import {GameProtocol, useProtocol} from "widgets/GameProtocol";
interface GameListProps {
    className?: string,
}

export const GameList: FC<GameListProps> = (GameListProps) => {
    const { className } = GameListProps;
    const games = useContext<TeamGameData[]>(GamesContext)

    const {popupState, setPopupState} = useProtocol();

    return (
        <div className={classNames(cls.GameList, {}, [className])}>
            {games.map((item, index) => (
                <GameItem key={index} popupState={popupState} setPopupState={setPopupState} game={item} protocol={true} />
            ))}
            <GameProtocol isOpen={popupState.isOpen} {...popupState.gameData}  game={popupState.gameInfo}/>
        </div>
    );
};