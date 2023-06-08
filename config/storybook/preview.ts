import type { Preview } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProviders';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDcorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), RouterDecorator, StoreDecorator({
        loginForm: { username: '123', password: 'asd' },
    })],
    // translationDecorator not working
};

export default preview;
