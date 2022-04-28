module.exports = {
    stories: ['../src/**/*.stories.@(js|mdx)'],
    addons: [
        '@storybook/addon-notes',
        '@storybook/addon-actions',
        '@storybook/addon-knobs',
        '@storybook/addon-links',
        '@storybook/addon-viewport',
        '@storybook/addon-a11y',
        '@storybook/addon-options',
        '@storybook/preset-scss',
        'react-storybook-addon-static-markup',
    ],
    core: {
        builder: 'webpack5',
    },
}