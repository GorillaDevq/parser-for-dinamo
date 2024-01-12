interface GameData {
    IsOnline: boolean;
    GameStatus: number;
    MaxPeriod: number;
    FromDate: null;
    GameDate: string;
    HasTime: boolean;
    GameTime: string;
    GameTimeMsk: string;
    HasVideo: boolean;
    LiveID: null;
    VideoID: string;
    TvRu: null;
    TvEn: null;
    Online: Online;
    OnlineTeams: OnlineTeam[];
    OnlineStarts: OnlineStart[];
    OnlinePlays: OnlinePlay[];
    OnlinePeriods: OnlinePeriod[];
    GameTeams: GameTeam[];
    CompNameRu: string;
    CompNameEn: string;
    LeagueNameRu: string;
    LeagueNameEn: string;
    LeagueShortNameRu: string;
    LeagueShortNameEn: string;
    Gender: number;
    CompID: number;
    LeagueID: number;
    Is3x3: boolean;
}

interface Online {
    OnlineID: number;
    GameID: number;
    CompName1: string;
    CompName2: string;
    GameDate: string;
    GameTime: string;
    TimeDelay: number;
    GameNumber: string;
    RegionID: number;
    ArenaID: number;
    Venue1: string;
    Venue2: string;
    Attendance: number;
    PeriodCount: number;
    PeriodExtraSeconds: number;
    Periods: string;
    Intervals: string;
    PersonalFouls: number;
    TeamFouls: string;
    PlayersOnCourt: number;
    FreeThrowValue: number;
    FieldGoalValue: number;
    LongShotValue: number;
    LeftTeamNumber: number;
    SysStatus: number;
    SysLastChanged: string;
    SysClientLastChanged: string;
    SysUser: null;
}

interface OnlineTeam {
    OnlineTeamID: number;
    GameID: number;
    TeamNumber: number;
    TeamID: number;
    TeamGender: number;
    TeamName1: null | string;
    TeamName2: null | string;
    RegionName1: null | string;
    RegionName2: null | string;
    ShortName1: null | string;
    ShortName2: null | string;
    UniformNumber: number;
    UniformType: number;
    DominantColorARGB: string;
    SecondColorARGB: string;
    BorderColorARGB: string;
    NumberColorARGB: string;
    SysLastChanged: string;
    SysStatus: number;
    SysClientLastChanged: string;
    SysUser: null;
}

interface OnlineStart {
    OnlineStartID: number;
    GameID: number;
    StartID: number;
    TeamNumber: number;
    StartType: number;
    PlayerNumber: number;
    DisplayNumber: string;
    LicenceNumber: null;
    PersonID: number;
    PersonName1: string;
    PersonName2: string;
    Capitan: number;
    PersonBirth: null | string;
    PersonBirthday: null | string;
    PosID: number;
    CountryCodeIOC: null | string;
    CountryName1: null | string;
    CountryName2: null | string;
    Rank1: null;
    Rank2: null;
    Height: null;
    Weight: null;
    SysStatus: number;
    SysLastChanged: string;
    SysClientLastChanged: string;
    SysUser: null;
}

interface OnlinePlay {
    OnlinePlayID: number;
    GameID: number;
    PlayID: number;
    PlayFlag: number;
    PlayPeriod: number;
    PlaySecond: number;
    PlaySortOrder: number;
    StartID: number;
    ParentPlayID: null | number;
    PlayTypeID: number;
    PlayZone: null | number;
    PlayX: null;
    PlayY: null;
    SysLastChanged: string;
    SysStatus: number;
    SysClientLastChanged: string;
    VideoFrom: number;
    VideoTo: number;
}

interface OnlinePeriod {
    Period: number;
    Seconds: number;
}

interface GameTeam {
    TeamNumber: number;
    TeamID: number;
    TeamName: TeamName;
    Score: number;
    Points: number;
    Shot1: number;
    Goal1: number;
    Shot2: number;
    Goal2: number;
    Shot3: number;
    Goal3: number;
    PaintShot: number;
    PaintGoal: number;
    Shots1: string;
    Shot1Percent: string;
    Shots2: string;
    Shot2Percent: string;
    Shots3: string;
    Shot3Percent: string;
    PaintShots: string;
    PaintShotPercent: string;
    Assist: null | number;
    Blocks: null | number;
    DefRebound: null | number;
    OffRebound: null | number;
    Rebound: null | number;
    Steal: null | number;
    Turnover: null | number;
    TeamDefRebound: null | number;
    TeamOffRebound: null | number;
    TeamRebound: null | number;
    TeamSteal: null | number;
    TeamTurnover: null | number;
    Foul: null | number;
    OpponentFoul: null | number;
    Seconds: number;
    PlayedTime: string;
    PlusMinus: null;
    Coach: GameCoach;
    Players: GamePlayer[];
}

interface GameCoach {
    PersonID: number;
    TeamNumber: number;
    PlayerNumber: number;
    DisplayNumber: string;
    LastNameRu: string;
    LastNameEn: string;
    FirstNameRu: string;
    FirstNameEn: string;
    PersonNameRu: string;
    PersonNameEn: string;
    PersonBirth: string;
    PosID: number;
    CountryCodeIOC: string;
    CountryNameRu: string;
    CountryNameEn: string;
    RankRu: null;
    RankEn: null;
    FoulC: number;
    FoulB: number;
    FoulD: number;
    Foul: number;
}

interface GamePlayer {
    PersonID: number;
    TeamNumber: number;
    PlayerNumber: number;
    DisplayNumber: string;
    LastNameRu: string;
    LastNameEn: string;
    FirstNameRu: string;
    FirstNameEn: string;
    PersonNameRu: string;
    PersonNameEn: string;
    Capitan: number;
    PersonBirth: string;
    PosID: number;
    CountryCodeIOC: string;
    CountryNameRu: string;
    CountryNameEn: string;
    RankRu: null,
    RankEn: null,
    Height: null,
    Weight: null,
    Points: null | number;
    Shot1: null | number;
    Goal1: null | number;
    Shots1: null | string;
    Shot1Percent: string;
    Shot2: null | number;
    Goal2: null | number;
    Shots2: null | string;
    Shot2Percent: string;
    PaintShot: number;
    PaintGoal: number;
    PaintShots: string;
    Shot3: null | number;
    Goal3: null | number;
    Shots3: null | string;
    Shot3Percent: string;
    Assist: null | number;
    Blocks: null | number;
    DefRebound: null | number;
    OffRebound: null | number;
    Rebound: null | number;
    Steal: null | number;
    Turnover: null | number;
    Foul: null | number;
    OpponentFoul: null | number;
    PlusMinus: null | number;
    Seconds: null | number;
    PlayedTime: null | string;
    IsStart: boolean;
    StartMark: string;
}