import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PersonProtocol.module.scss';

interface PersonProtocolProps extends GamePlayer{
    className?: string,
}

export const PersonProtocol: FC<PersonProtocolProps> = (PersonProtocolProps) => {
    const {
        className, PlayerNumber, PersonID, PersonNameRu,
        PlayedTime, Points, Shots1, Shots2, Shots3,
        Goal2, Goal3, Shot2, Shot3, DefRebound,
        OffRebound, Rebound, Assist, Steal,
        Turnover, Blocks, Foul, OpponentFoul,
        PlusMinus,
    } = PersonProtocolProps;

    return (
        <tr className={classNames(cls.protocol)}>
            <td>
                <div className="el-shirt mod-xs">
                    {/*<div number="44" color1="#FFFFFF" color2="#000000" color3="#000000">*/}
                    <img className={classNames(cls.protocol__shirt)} src={`https://russiabasket.ru/games/uniform?number=${PlayerNumber}&amp;color1=%23FFFFFF&amp;color2=%23000000&amp;color3=%23000000`} alt={''} />
                    {/*</div>*/}
                </div>
            </td>
            <td>
                <div className="pic">
                    <a target="_blank" href="/players/39210?apiUrl=https://org.infobasket.su&amp;compId=42738&amp;lang=ru">
                        <img className={classNames(cls.protocol__photo)} alt="" src={`https://org.infobasket.su/Widget/GetPersonPhoto/${PersonID}?d=1&amp;compId=42738&amp;teamId=758`} />
                    </a>
                </div>
            </td>
            <td>
                <div className="player">
                    <div className="name">
                        <span className="ng-binding">{PersonNameRu}</span>
                    </div>
                </div>
            </td>
            <td className="ng-binding">{PlayedTime && PlayedTime}</td>
            <td className="ng-binding">{Points && Points}</td>
            <td className="ng-binding">{Shots2 && Shots2}</td>
            <td className="ng-binding">{Shots3 && Shots3}</td>
            <td className="ng-binding">{Shot2 | Shot3 &&
                `${Goal2 + Goal3}/${Shot2 + Shot3}`
            }</td>
            <td className="ng-binding">{Shots1 && Shots1}</td>
            <td className="ng-binding">{DefRebound && DefRebound}</td>
            <td className="ng-binding">{OffRebound && OffRebound}</td>
            <td className="ng-binding">{Rebound && Rebound}</td>
            <td className="ng-binding">{Assist && Assist}</td>
            <td className="ng-binding">{Steal && Steal}</td>
            <td className="ng-binding">{Turnover && Turnover}</td>
            <td className="ng-binding">{Blocks && Blocks}</td>
            <td className="ng-binding">{Foul && Foul}</td>
            <td className="ng-binding">{OpponentFoul && OpponentFoul}</td>
            <td className="ng-binding">{PlusMinus && PlusMinus}</td>
            <td className="ng-binding"></td>
        </tr>
    );
};