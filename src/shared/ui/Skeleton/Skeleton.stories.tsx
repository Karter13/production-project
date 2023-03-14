import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ModalDark } from 'shared/ui/Modal/Modal.stories';
import { Skeleton } from './Skeleton';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const NormalSkeleton = Template.bind({});
NormalSkeleton.args = {
    width: '100%',
    height: 200,
};

export const CircleSkeleton = Template.bind({});
CircleSkeleton.args = {
    border: '50%',
    width: 100,
    height: 100,
};

export const NormalSkeletonDark = Template.bind({});
NormalSkeletonDark.args = {
    width: '100%',
    height: 200,
};
NormalSkeletonDark.decorators = [ThemeDecorator(Theme.DARK)];

export const CircleSkeletonDark = Template.bind({});
CircleSkeletonDark.args = {
    border: '50%',
    width: 100,
    height: 100,
};
CircleSkeletonDark.decorators = [ThemeDecorator(Theme.DARK)];
