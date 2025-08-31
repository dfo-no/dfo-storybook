module.exports = {
    stories: ['../src/**/*.stories.@(js|mdx)'],
    staticDirs: ['../public'], // 👈 This replaces the -s flag in Storybook 8 and above
    addons: [
        // '@storybook/addon-notes', // TODO: Fix this when the addon is updated to work with Storybook 9. https://www.npmjs.com/package/@storybook/addon-notes?activeTab=readme
        '@storybook/addon-a11y',
        // '@storybook/addon-controls',
        '@storybook/addon-links',
        '@storybook/addon-options',
        '@storybook/preset-scss',
        '@storybook/preset-create-react-app', // Added as recommended by Storybook 9
        'react-storybook-addon-static-markup'
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {
            builder: '@storybook/react-webpack5',
        },
    },
}