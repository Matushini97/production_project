import type { StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProviders';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDcorator';
import { LoginForm } from './LoginForm';

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
    },
};

export const withError: Story = {
    args: {
    },
    decorators: [StoreDecorator({
        loginForm: { username: '123', password: 'asd', error: 'ERROR' },
    })],
};

export const Loading: Story = {
    args: {
    },
    decorators: [StoreDecorator({
        loginForm: { isLoading: true },
    })],
};
