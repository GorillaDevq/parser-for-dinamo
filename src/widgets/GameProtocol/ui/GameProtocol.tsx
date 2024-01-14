import {FC} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './GameProtocol.module.scss';
import {GameItem} from "Entities/GameItem";

interface GameProtocol extends GameData{
    isOpen: boolean;
    game: TeamGameData | null;
}

export const GameProtocol: FC<GameProtocol> = (GameProtocolProps) => {
    const { isOpen, game } = GameProtocolProps;

    return (
        <div className={classNames(cls.gameProtocol, {[cls.gameProtocol_opened]: isOpen}, [])}>
            <div className={classNames(cls.gameProtocol__container, {}, [])}>
                {game && <GameItem game={game} protocol={false}/>}
            </div>
        </div>
    );
};

