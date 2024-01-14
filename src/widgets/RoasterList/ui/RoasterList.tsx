import {FC} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './RoasterList.module.scss';
import {Person} from "Entities/Person";

interface RoasterListProps {
    className?: string,
    arrayToRender: Coach[] | Player[] |  Staff[],
}

export const RoasterList: FC<RoasterListProps> = ({ className, arrayToRender }) => {

    return (
        <div className={classNames(cls.PlayerList, {}, [className])}>
            {arrayToRender.map((item, index) => <Person {...item} key={index}/>)}
        </div>
    );
};