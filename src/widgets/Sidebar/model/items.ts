import React from 'react';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';
import ArticleIcon from 'shared/assets/icons/article-20-20.svg';
import { RoutePAth } from 'shared/config/routerConfig/routeConfig';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean
}

export const SidebarItemsList: SidebarItemType [] = [
    {
        path: RoutePAth.main,
        Icon: MainIcon,
        text: 'Главная',
    },
    {
        path: RoutePAth.about,
        Icon: AboutIcon,
        text: 'О сайте',
    },
    {
        path: RoutePAth.profile,
        Icon: ProfileIcon,
        text: 'Профиль',
        authOnly: true,
    },
    {
        path: RoutePAth.articles,
        Icon: ArticleIcon,
        text: 'Статьи',
        authOnly: true,
    },
];
