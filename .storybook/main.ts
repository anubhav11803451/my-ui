// import { StorybookConfig } from "@storybook/react/types"
const config = {
    stories: ['../src/components/**/*.stories.@(tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-actions',
    ],
    framework: '@storybook/react',
};
module.exports = config;
