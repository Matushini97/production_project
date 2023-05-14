import 'app/styles/index.scss';
import { Decorator } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProviders';

export const ThemeDecorator = (theme: Theme): Decorator => (Story) => (
    <div className={`app ${theme}`}>
        <Story />
    </div>
);
