import cls from './News.module.scss'
import BallIcon from 'shared/assets/icons/ball-icon.svg';
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {textSliser} from "shared/lib/textSlicer/textSlicer";

interface NewsProps {
    className?: string;
    newsImage: string;
    newsText: string;
}
export const News = (props: NewsProps) => {
    const {
        className,
        newsImage,
        newsText
    } = props;

    return (
        <div
            className={`${cls.News} ${
                newsText
                    ? ''
                    : cls.wideImage
            }`
        }
            style={{backgroundImage: `url(${newsImage})`}}
        >
            <p className={cls.description}>
                {textSliser({text: newsText, number: 80})}
            </p>
            <Button
                theme={ThemeButton.NEWS}
            >
                <BallIcon className={cls.ballIcon}/>
                Читать продолжение
            </Button>
        </div>
    /*<iframe  className={'iframe'} src={'https://lokobasket.com/stat-rfb/game/?id=778005&apiUrl=https://org.infobasket.su&lang=ru'} />*/
    );
};