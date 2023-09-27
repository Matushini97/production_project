import type { StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProviders';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text, TextTheme } from 'shared/ui/Text/Text';

const meta = {
    title: 'shared/Text',
    component: Text,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: 'Title',
        text: 'Text here',
    },
};

export const Error: Story = {
    args: {
        title: 'Title',
        text: 'Text here',
        theme: TextTheme.ERROR,
    },
};

export const onlyTitle: Story = {
    args: {
        title: 'Only Title',
    },
};

export const onlyText: Story = {
    args: {
        text: 'Only Text',
    },
};

export const PrimaryDark: Story = {
    args: {
        title: 'Title',
        text: 'Text here',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const onlyTitleDark: Story = {
    args: {
        title: 'Only Title',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const onlyTextDark: Story = {
    args: {
        text: 'Only Text',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
