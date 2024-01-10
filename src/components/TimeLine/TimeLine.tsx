import {classNames} from "shared/lib/classNames/classNames";
import cls from './TimeLine.module.scss'
import {News} from "components/News/News";
import { newsArray } from "shared/assets/utils/constants";

interface TimeLineProps {
    className?: string;
}
export const TimeLine = ({className}: TimeLineProps) => {

    return (
        <ul className={classNames(cls.TimeLine, {}, [className])}>
            {newsArray.map(({newsImage, newsText}) =>
                <li key={newsImage}>
                    <News
                        newsImage={newsImage}
                        newsText={newsText}
                    />
                </li>
            )}
        </ul>
    );
};