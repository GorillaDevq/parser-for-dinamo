import './styles/index.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {Navbar} from "widgets/Navbar";
import {AppRouter} from "app/providers/router";
import {useCallback, useEffect} from "react";
import {mainApi} from "features/MainApi/MainApi";

export const App = () => {
    const {theme, toggleTheme} = useTheme();

    const fetchData = useCallback(async () => {
        return await mainApi.getTeamRoster()
    }, [])

    useEffect(() => {
        fetchData()
            .catch(console.error);
    }, [fetchData])

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <AppRouter />
        </div>
    );
};