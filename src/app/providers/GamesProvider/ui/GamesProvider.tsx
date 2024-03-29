import {GamesContext} from "app/providers/GamesProvider/lib/GamesContext";
import {FC, ReactNode, useCallback, useEffect, useState} from "react";
import {mainApi} from "features/MainApi/MainApi";

interface Props {
    children: ReactNode;
}

export const GamesProvider :FC<Props> = ({children}) => {
    const [games, setGames] = useState<TeamGameData[]>([])

    const fetchGames = useCallback(async () => {
        return await mainApi.getTeamGames()
    }, [])

    useEffect(() => {
        fetchGames()
            .then(res => setGames(res))
            .catch(err => console.log(err))
    }, [fetchGames]);

    return (
        <GamesContext.Provider value={games}>
            {children}
        </GamesContext.Provider>
    )
}