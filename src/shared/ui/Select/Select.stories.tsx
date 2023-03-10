import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import 'app/styles/index.scss';

import AvatarImg from './storybook.jpg';
import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const PrimarySelect = Template.bind({});
PrimarySelect.args = {
    label: 'Селектор',
    options: [
        { value: '123', content: 'First' },
        { value: '1234', content: 'Second' },
    ],
};
