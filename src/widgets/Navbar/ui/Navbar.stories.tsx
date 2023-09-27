import type { StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { Theme } from 'app/providers/ThemeProviders';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import Navbar from './Navbar';

const meta = {
    title: 'widget/Navbar',
    component: Navbar,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
    decorators: [StoreDecorator({})],
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};
export const AuthNavbar: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
        user: { authData: {} },
    })],
};
