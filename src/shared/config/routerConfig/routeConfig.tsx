import {RouteProps} from "react-router-dom";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about'
}

export const RoutePAth: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about'
}
// @ts-ignore
export const routerConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePAth.main,
        element: <MainPage />
    },
    [AppRoutes.ABOUT]: {
        path: RoutePAth.about,
        element: <AboutPage />
    }
}