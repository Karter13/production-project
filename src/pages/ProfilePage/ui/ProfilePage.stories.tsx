import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const NormalProfilePage = Template.bind({});
NormalProfilePage.args = {};
NormalProfilePage.decorators = [
    StoreDecorator({
        profile: {
            form: {
                username: 'Mikhail',
                age: 47,
                country: Country.Belarus,
                lastname: 'DEVELOPMENT',
                first: 'DEV',
                city: 'Grodno',
                currency: Currency.RUB,
            },
        },
    }),
];
export const DarkProfilePage = Template.bind({});
DarkProfilePage.args = {};
DarkProfilePage.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        profile: {
            form: {
                username: 'Mikhail',
                age: 47,
                country: Country.Belarus,
                lastname: 'DEVELOPMENT',
                first: 'DEV',
                city: 'Grodno',
                currency: Currency.RUB,
            },
        },
    }),
];
