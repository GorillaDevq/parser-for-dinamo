import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Protocol.module.scss';
import {PersonProtocol} from "Entities/PersonProtocol";

interface ProtocolProps {
    className?: string;
    logoTeam: string;
    nameTeam: string;
    gameTeam: GameTeam;
}

export const Protocol: FC<ProtocolProps> = (ProtocolProps) => {
    const { className, nameTeam, logoTeam, gameTeam } = ProtocolProps;
    const {
        PlayedTime, Score, Shots1, Shots2, Shots3,
        Shot1Percent, Shot2Percent, Shot3Percent,
        DefRebound, OffRebound, Rebound,
        Assist, Steal, Turnover, Blocks, Foul,
        OpponentFoul, Goal2, Goal3, Shot2, Shot3,
        TeamDefRebound, TeamOffRebound, TeamRebound,
        TeamSteal, TeamTurnover, Coach, Players
    } = gameTeam;


    return (
        <div className={classNames(cls.Protocol, {}, [className])}>
            <h2 className={classNames(cls.protocol__title)}>
                <img className={classNames(cls.protocol__logo)} src={logoTeam} alt={nameTeam}/>
                {nameTeam}
            </h2>
            <div className="col-sm-12 col-md-9">
                <div className="table-responsive mod-protocol">
                        <table className="statistics__table table table-striped row-col-hover">
                        <thead>
                        <tr>
                            <th rowSpan={2} colSpan={3} className="sortable">Игроки</th>
                            <th rowSpan={2} title="Сыгранное время">СВ</th>
                            <th rowSpan={2} title="Набранные очки">Очки</th>
                            <th colSpan={4}>Броски</th>
                            <th colSpan={3}>Подборы</th>
                            <th rowSpan={2} title="Голевые передачи">ГП</th>
                            <th rowSpan={2} title="Перехваты">ПХ</th>
                            <th rowSpan={2} title="Потери">ПТ</th>
                            <th rowSpan={2} title="Блокшоты">БШ</th>
                            <th rowSpan={2} title="Фолы">Ф</th>
                            <th rowSpan={2} data-original-title="" title="Фолы соперника">ФС</th>
                            <th rowSpan={2} title="Плюс/минус">+/-</th>
                            <th rowSpan={2} title="Коэффициент полезности">КПИ</th>
                        </tr>
                        <tr>
                            <th title="Двухочковые броски">2-очк</th>
                            <th title="Трехочковые броски">3-очк</th>
                            <th title="Броски с игры">И</th>
                            <th title="Штрафные броски">ШБ</th>
                            <th title="Подборы на своем щите">СЩ</th>
                            <th title="Подборы на чужом щите">ЧЩ</th>
                            <th title="Подборы всего">ВС</th>
                        </tr>
                        </thead>
                        <tbody>
                            {Players.map(({...playerProps})=> (<PersonProtocol {...playerProps}/>))}
                            <tr className="ng-scope">
                                <td colSpan={3}>
                                    Тренер <span className="ng-binding"> {Coach.PersonNameRu}</span>
                                </td>
                                <td colSpan={13}></td>
                                <td className="ng-binding"></td>
                                <td colSpan={3}></td>
                            </tr>
                        </tbody>
                        <tfoot>
                        <tr>
                            <td colSpan={3}>КОМАНДА:</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="ng-binding">{TeamDefRebound && TeamDefRebound}</td>
                            <td className="ng-binding">{TeamOffRebound && TeamOffRebound}</td>
                            <td className="ng-binding">{TeamRebound && TeamRebound}</td>
                            <td></td>
                            <td className="ng-binding">{TeamSteal && TeamSteal}</td>
                            <td className="ng-binding">{TeamTurnover && TeamTurnover}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td colSpan={3}>ВСЕГО:</td>
                            <td className="ng-binding">{PlayedTime}</td>
                            <td className="ng-binding">{Score}</td>
                            <td className="ng-binding">{Shots2} <br />{Shot2Percent}%</td>
                            <td className="ng-binding">{Shots3} <br />{Shot3Percent}%</td>
                            <td className="ng-binding">{Goal2 + Goal3}/{Shot2 + Shot3} <br />{((Goal2 + Goal3) * 100 / (Shot2 + Shot3)).toFixed(1)}%</td>
                            <td className="ng-binding">{Shots1} <br />{Shot1Percent}%</td>
                            <td className="ng-binding">{DefRebound}</td>
                            <td className="ng-binding">{OffRebound}</td>
                            <td className="ng-binding">{Rebound}</td>
                            <td className="ng-binding">{Assist}</td>
                            <td className="ng-binding">{Steal}</td>
                            <td className="ng-binding">{Turnover}</td>
                            <td className="ng-binding">{Blocks}</td>
                            <td className="ng-binding">{Foul}</td>
                            <td className="ng-binding">{OpponentFoul}</td>
                            <td className="ng-binding"></td>
                            <td></td>
                        </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    );
};