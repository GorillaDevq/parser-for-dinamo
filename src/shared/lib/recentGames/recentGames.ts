export const recentGames = (gamesArray: TeamGameData[]) => {

    const recentGames = gamesArray.filter(({GameStatus} :TeamGameData) => GameStatus == 1);
    const nextGames = gamesArray.filter(({GameStatus} :TeamGameData) => GameStatus == 0);

    return recentGames.slice(-5).concat(nextGames.slice(0, 3))
}