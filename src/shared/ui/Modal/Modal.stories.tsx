import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Modal} from "shared/ui/Modal/Modal";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const ModalPrimary = Template.bind({});
ModalPrimary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta excepturi fugiat iusto magni nostrum quos sequi. Esse fugit praesentium temporibus. Dicta excepturi fugiat iusto magni nostrum quos sequi. Esse fugit praesentium temporibus.',
};

export const ModalDark = Template.bind({});
ModalDark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta excepturi fugiat iusto magni nostrum quos sequi. Esse fugit praesentium temporibus. Dicta excepturi fugiat iusto magni nostrum quos sequi. Esse fugit praesentium temporibus.',
};
ModalDark.decorators = [ThemeDecorator(Theme.DARK)];

