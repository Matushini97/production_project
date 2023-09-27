import 'app/styles/index.scss';
import { Decorator } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/ThemeProviders';

export const ThemeDecorator = (theme: Theme): Decorator => (Story) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <Story />
        </div>
    </ThemeProvider>
);
