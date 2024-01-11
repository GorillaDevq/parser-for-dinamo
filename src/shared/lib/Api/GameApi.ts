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
    PersonInfo: PersonInfo,
    PersonID: number,
    PlayerNumber: number,
    DisplayNumber: string,
    Capitan: number,
    PersonBirth: string,
    Age: number,
    PosID: number,
    Position: string,
    NationalityId: string,
    CountryId: string,
    CountryCodeIOC: string,
    CountryName: string,
    Rank: string,
    Height: number,
    Weight: number,
    IsActive: boolean,
    ActiveStatus: string,
    PhotoUrl: string
}

interface PersonInfo {
    Age: number,
    PersonID: number,
    PersonGUID: null,
    PersonLastNameRu: string,
    PersonFirstNameRu: string,
    PersonSecondNameRu: string,
    PersonFullNameRu: string,
    PersonLastNameEn: string,
    PersonFirstNameEn: string,
    PersonSecondNameEn: string,
    PersonFullNameEn: string,
    PersonNickNameRu: null,
    PersonNickNameEn: null,
    PersonGender: number,
    PersonBirthday: string,
    PersonBirthYear: number,
    PersonBirth: string,
    PersonHeight: number,
    PersonWeight: number,
    PersonBornIn: null,
    PersonBornInRegion: null,
    PersonCountry: null,
    PersonRegion: null,
    PersonStatus: number,
    SysStatus: number,
    SysLastChanged: string,
    SysUser: null,
    SysMyUser: null,
    Coaches: [],
    Officials: [],
    PersonPhotoes: [],
    Players: [],
    Referees: [],
    GameStartlists: [],
    Country: null,
    PersonOldNames: [],
    PersonContacts: []
}

interface TeamRosterData {
    TeamID: number,
    TeamName: TeamName,
    Players: Player[],
    AvgAge: null,
    AvgHeight: null,
    AvgWeight: null
}

class GameApi {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl
    }

    _makeRequest = async <T>(url: string, options?: RequestInit) :Promise<T> => {
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

    getTeamRoster = async () :Promise<TeamRosterData> => {
        try {
            return await this._makeRequest(this.baseUrl + '/Widget/TeamRoster/28016?compId=42724&format=json&lang=ru')
        } catch (err) {

        }
    }
}