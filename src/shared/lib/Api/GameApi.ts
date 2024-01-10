interface TeamName {
    CompTeamNameID: number,
    TeamID: number,
    TeamType: number,
    CompTeamShortNameRu: string,
    CompTeamShortNameEn: string,
    CompTeamNameRu: string,
    CompTeamNameEn: string,
    CompTeamRegionNameRu: string,
    CompTeamRegionNameEn: string,
    CompTeamAbcNameRu: string,
    CompTeamAbcNameEn: string,
    CompTeamNameChanged: null,
    CompTeamNameDefault: boolean,
    SysStatus: number,
    SysLastChanged: string,
    SysUser: null,
    SysMyUser: null,
    CompTeams: [],
    Team: null,
    IsRealTeam: boolean,
}

interface Player {

}

interface GameApiData {
    TeamID: number,
    TeamName: TeamName,
    Players: Player[],

}

class GameApi {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl
    }

    _makeRequest = async <T>(url: string, options: RequestInit) :Promise<T> => {
        try {
            const response = await fetch(url, options)
            if (response.ok) {
                return await response.json()
            } else {
                return Promise.reject(`Ошибка ${response.status}`)
            }
        } catch (err) {
            console.log(`Ошибка ${err}`)
        }

    }

    getTeamRoster = async () :Promise<GameApiData> => {
        return
    }
}