import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import 'app/styles/index.scss';
import { ProfileCard } from 'entities/Profile';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

import avatar from 'shared/assets/test/storybook.jpg';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const PrimaryProfileCard = Template.bind({});
PrimaryProfileCard.args = {
    data: {
        username: 'Mikhail',
        age: 47,
        country: Country.Belarus,
        lastname: 'DEVELOPMENT',
        first: 'DEV',
        currency: Currency.RUB,
        city: 'Grodno',
        avatar,
    },
};

export const ProfileCardWithError = Template.bind({});
ProfileCardWithError.args = {
    error: 'true',
};

export const ProfileCardWithLoading = Template.bind({});
ProfileCardWithLoading.args = {
    isLoading: true,
};
