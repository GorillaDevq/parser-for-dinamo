import {FC} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import {getSrcIframe} from "shared/lib/getSrcIframe/getSrcIframe";
import cls from './GameProtocol.module.scss';
import {GameItem} from "Entities/GameItem";
import {Protocol} from "Entities/Protocol";

interface GameProtocol extends GameData{
    isOpen: boolean;
    game: TeamGameData | null;
}

export const GameProtocol: FC<GameProtocol> = (GameProtocolProps) => {
    const { isOpen, game, VideoID, GameTeams } = GameProtocolProps;

    return (
        <div className={classNames(cls.gameProtocol, {[cls.gameProtocol_opened]: isOpen}, [])}>
            {game && VideoID &&
                <div className={classNames(cls.gameProtocol__container, {}, [])}>
                    {<GameItem game={game} protocol={false}/>}
                    <iframe allowFullScreen src={getSrcIframe(VideoID)}></iframe>
                    <Protocol logoTeam={game.TeamLogoA} nameTeam={game.TeamNameAru} gameTeam={GameTeams[0]} />
                    <Protocol logoTeam={game.TeamLogoB} nameTeam={game.TeamNameBru} gameTeam={GameTeams[1]}/>
                </div>
            }
        </div>
    );
};

