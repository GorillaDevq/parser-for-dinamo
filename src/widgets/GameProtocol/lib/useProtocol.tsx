import {useCallback, useEffect, useState} from "react";
import {mainApi} from "features/MainApi/MainApi";

export interface PopupState {
    isOpen: boolean;
    gameId: number | null;
    gameInfo: TeamGameData | null;
    gameData: GameData | null;
}
export const useProtocol = () => {
    const [popupState, setPopupState] = useState<PopupState>({
        isOpen: false,
        gameId: null,
        gameInfo: null,
        gameData: null,
    })

    const fetchGame = useCallback(async () => {
        return await mainApi.getGameProtocol(popupState.gameId)
    }, [popupState.gameId])

    useEffect(() => {
        if (popupState.isOpen) {
            fetchGame()
                .then(res => setPopupState({...popupState, gameData: res}))
                .catch(err => console.log(err))
        }
    }, [fetchGame, popupState.isOpen])

    return {popupState, setPopupState}
}