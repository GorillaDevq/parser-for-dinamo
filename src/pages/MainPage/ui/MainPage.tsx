import {TimeLine} from "components/TimeLine/TimeLine";
import {GameBar} from "widgets/GameBar";
export default function MainPage() {

    return (
        <div className="main">
            <GameBar />
            <TimeLine />
        </div>
    );
};