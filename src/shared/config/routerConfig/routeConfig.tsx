import { RouteProps } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not_found'
}

export const RoutePAth: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    // last
    [AppRoutes.NOT_FOUND]: '*',
};
export const routerConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePAth.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePAth.about,
        element: <AboutPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePAth.not_found,
        element: <NotFoundPage />,
    },
};
