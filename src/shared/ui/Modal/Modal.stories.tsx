import type { StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { Modal } from 'shared/ui/Modal/Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProviders';

const meta = {
    title: 'shared/Modal',
    component: Modal,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        isOpen: true,
        children: 'Lorem',
    },
};

export const Dark: Story = {
    args: {
        isOpen: true,
        children: 'Lorem',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
