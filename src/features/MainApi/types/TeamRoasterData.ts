interface TeamName {
    CompTeamNameID: number;
    TeamID: number;
    TeamType: number;
    CompTeamShortNameRu: string;
    CompTeamShortNameEn: string;
    CompTeamNameRu: string;
    CompTeamNameEn: string;
    CompTeamRegionNameRu: string;
    CompTeamRegionNameEn: string;
    CompTeamAbcNameRu: string;
    CompTeamAbcNameEn: string;
    CompTeamNameChanged: null;
    CompTeamNameDefault: boolean;
    SysStatus: number;
    SysLastChanged: string;
    SysUser: null;
    SysMyUser: null;
    CompTeams: [];
    Team: null;
    IsRealTeam: boolean;
}

interface Player {
    PersonInfo: PersonInfo;
    PersonID: number;
    PlayerNumber: number;
    DisplayNumber: string;
    Capitan: number;
    PersonBirth: string;
    Age: number;
    PosID: number;
    Position: string;
    NationalityId: string;
    CountryId: string;
    CountryCodeIOC: string;
    CountryName: string;
    Rank: string;
    Height: number;
    Weight: number;
    IsActive: boolean;
    ActiveStatus: string;
    PhotoUrl: string;
}

interface PersonInfo {
    Age: number;
    PersonID: number;
    PersonGUID: null;
    PersonLastNameRu: string;
    PersonFirstNameRu: string;
    PersonSecondNameRu: string;
    PersonFullNameRu: string;
    PersonLastNameEn: string;
    PersonFirstNameEn: string;
    PersonSecondNameEn: string;
    PersonFullNameEn: string;
    PersonNickNameRu: null;
    PersonNickNameEn: null;
    PersonGender: number;
    PersonBirthday: string;
    PersonBirthYear: number;
    PersonBirth: string;
    PersonHeight: number;
    PersonWeight: number;
    PersonBornIn: null;
    PersonBornInRegion: null;
    PersonCountry: null;
    PersonRegion: null;
    PersonStatus: number;
    SysStatus: number;
    SysLastChanged: string;
    SysUser: null;
    SysMyUser: null;
    Coaches: [];
    Officials: [];
    PersonPhotoes: [];
    Players: [];
    Referees: [];
    GameStartlists: [];
    Country: null;
    PersonOldNames: [];
    PersonContacts: [];
}

interface Coach {
    PersonInfo: PersonInfo;
    PersonID: number;
    CoachNumber: number;
    DisplayNumber: string;
    PersonBirth: string;
    Age: number;
    PostID: null;
    Post: string;
    CountryCodeIOC: string;
    CountryName: string;
    Rank: string;
    IsActive: boolean;
    ActiveStatus: string;
    PhotoUrl: string;
}

interface Staff {
    PersonInfo: PersonInfo;
    PersonID: number;
    StaffNumber: number;
    DisplayNumber: string;
    PersonBirth: string;
    Age: number;
    PostID: null;
    Post: string;
    CountryCodeIOC: string;
    CountryName: string;
    IsActive: boolean;
    ActiveStatus: string;
    PhotoUrl: string;
}

interface TeamRosterData {
    TeamID: number;
    TeamName: TeamName;
    Players: Player[];
    Coaches: Coach[];
    Staff: Staff[];
    AvgAge: null;
    AvgHeight: null;
    AvgWeight: null;
}
