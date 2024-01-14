import {FC, ReactNode, useCallback, useEffect, useState} from 'react';
import {mainApi} from "features/MainApi/MainApi";
import {TeamContext} from "app/providers/TeamProvider/lib/TeamContext";

interface Props {
    children: ReactNode;
}

export const TeamProvider: FC<Props> = ({children}) => {
    const [teamRoaster, setTeamRoaster] = useState<TeamRosterData | null>(null)

    const fetchTeamRoster = useCallback(async () => {
        return await mainApi.getTeamRoster()
    }, [])

    useEffect(() => {
        fetchTeamRoster()
            .then(res => setTeamRoaster(res))
            .catch(err => console.log(err))
    }, [fetchTeamRoster])

    return (
        <TeamContext.Provider value={teamRoaster}>
            {children}
        </TeamContext.Provider>
    );
};