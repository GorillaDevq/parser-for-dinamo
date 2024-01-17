import {classNames} from "shared/lib/classNames/classNames";
import cls from './GameBar.module.scss'
import {Game} from "components/Game/Game";
import {Gif} from "components/Gif/Gif";
import {useContext, useEffect, useState} from "react";
import {GamesContext} from "app/providers/GamesProvider/lib/GamesContext";
import {recentGames} from "shared/lib/recentGames/recentGames";
import {GameProtocol, useProtocol} from "widgets/GameProtocol";
import {Protocol} from "Entities/Protocol";

interface GameBarProps {
    className?: string;
}
export const GameBar = ({className}: GameBarProps) => {
    const gamesArray = useContext(GamesContext)
    const [renderGames, setRenderGames] = useState<TeamGameData[]>([])
    const {popupState, setPopupState} = useProtocol()


    useEffect(() => {
        if (gamesArray.length !== 0) {
            setRenderGames(recentGames(gamesArray))
        }
    }, [gamesArray])

    return (
        <section className={classNames(cls.GameBar, {}, [className])}>
            <Gif />
            <ul className={cls.widget}>
                {renderGames.map((game, index) => (
                    <li key ={index}>
                        <Game game={game} popupState={popupState} setPopupState={setPopupState} protocol={true}/>
                    </li>
                ))}
            </ul>
            <GameProtocol isOpen={popupState.isOpen} {...popupState.gameData}  game={popupState.gameInfo} />
        </section>
    );
};