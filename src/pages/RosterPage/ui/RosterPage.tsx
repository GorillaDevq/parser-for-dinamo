import {RoasterList} from "widgets/RoasterList";
import {useContext} from "react";
import {TeamContext} from "app/providers/TeamProvider/lib/TeamContext";

export default function RosterPage() {
    const teamRoaster = useContext<TeamRosterData>(TeamContext);
    const {Players, Coaches, Staff} = teamRoaster || {};

    return (
        <div className="main">
            {teamRoaster && [Players, Coaches, Staff].map((item, index) => <RoasterList arrayToRender={item} key={index}/>)}
        </div>
    );
};