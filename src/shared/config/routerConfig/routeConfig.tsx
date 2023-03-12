import { RouteProps } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';

export type AppRouterProps = RouteProps & {
    authOnly?: boolean;
}

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    // last
    NOT_FOUND = 'not_found'
}

export const RoutePAth: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',
    // last
    [AppRoutes.NOT_FOUND]: '*',
};
export const routerConfig: Record<AppRoutes, AppRouterProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePAth.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePAth.about,
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: RoutePAth.profile,
        element: <ProfilePage />,
        authOnly: true,
    },
    // last
    [AppRoutes.NOT_FOUND]: {
        path: RoutePAth.not_found,
        element: <NotFoundPage />,
    },
};
