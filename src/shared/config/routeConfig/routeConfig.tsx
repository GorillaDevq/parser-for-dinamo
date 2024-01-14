import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import {GamePage} from "pages/GamePage";
import React from "react";
import {RosterPage} from "pages/RosterPage";

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    GAMES = 'games',
    ROSTER = 'roster',
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.GAMES]: '/team-games',
    [AppRoutes.ROSTER]: '/team-roster'
}

export const RouteConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePaths.main,
        element: <MainPage />
    },
    [AppRoutes.ABOUT]: {
        path: RoutePaths.about,
        element: <AboutPage />
    },
    [AppRoutes.GAMES]: {
        path: RoutePaths.games,
        element: <GamePage />
    },
    [AppRoutes.ROSTER]: {
        path: RoutePaths.roster,
        element: <RosterPage />
    }
}
