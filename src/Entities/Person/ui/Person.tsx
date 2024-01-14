import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Person.module.scss';
import {nameSlicer} from "shared/lib/nameSlicer/nameSlicer";


export const Person: FC = (PersonProps: Player | Coach |  Staff) => {
    const {PhotoUrl, PersonInfo, CountryName, PersonBirth} = PersonProps;
    const {PersonFullNameRu, PersonHeight} = PersonInfo;

    return (
        <div className={classNames(cls.Person, {}, [])}>
            <img src={PhotoUrl} className={classNames(cls.person__img, {}, [])}/>
            <h3 className={classNames(cls.person__name, {}, [])}>{nameSlicer(PersonFullNameRu)}</h3>
            {(PersonProps as Player).Position
                ? <p className={classNames(cls.person__post, {}, [])}>{(PersonProps as Player).Position}</p>
                : <p className={classNames(cls.person__post, {}, [])}>{(PersonProps as Coach | Staff).Post}</p>
            }
            <p className={classNames(cls.person__country, {}, [])}>{CountryName}</p>
            <p className={classNames(cls.person__birthday, {}, [])}>Дата рождения: {PersonBirth}</p>
            {(PersonProps as Player).Position &&
                <p className={classNames(cls.person__height, {}, [])}>Рост: {PersonHeight}</p>
            }
        </div>
    );
};