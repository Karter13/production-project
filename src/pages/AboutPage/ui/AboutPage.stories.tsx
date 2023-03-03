import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { NavbarLight } from 'widgets/NavBar/ui/Navbar.stories';
import AboutPage from './AboutPage';

export default {
    title: 'pages/AboutPage',
    component: AboutPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = (args) => <AboutPage {...args} />;

export const AboutPageNormal = Template.bind({});
AboutPageNormal.args = {};
AboutPageNormal.decorators = [
    StoreDecorator({}),
];
export const AboutPageDark = Template.bind({});
AboutPageDark.args = {};
AboutPageDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({}),
];
