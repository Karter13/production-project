import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import 'app/styles/index.scss';
import { Avatar } from './Avatar';

import AvatarImg from './storybook.jpg';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const PrimaryAvatar = Template.bind({});
PrimaryAvatar.args = {
    size: 150,
    src: AvatarImg,
};

export const SmallAvatar = Template.bind({});
SmallAvatar.args = {
    size: 50,
    src: AvatarImg,
};
