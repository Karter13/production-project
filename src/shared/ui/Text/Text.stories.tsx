import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const PrimaryText = Template.bind({});
PrimaryText.args = {
    title: 'Title test',
    text: 'Text test',
};
export const DarkText = Template.bind({});
DarkText.args = {
    title: 'Title test',
    text: 'Text test',
};
DarkText.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Title test',
};
export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Title test',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Text test',
};
export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    title: 'Title test',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ErrorText = Template.bind({});
ErrorText.args = {
    title: 'Title test error',
    text: 'Text test error',
    theme: TextTheme.ERROR,
};

export const TextSizeL = Template.bind({});
TextSizeL.args = {
    title: 'Title test',
    text: 'Text test',
    size: TextSize.L,
};

export const TextSizeM = Template.bind({});
TextSizeM.args = {
    title: 'Title test',
    text: 'Text test',
    size: TextSize.M,
};
