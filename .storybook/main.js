module.exports = {
    stories: ['../src/**/*.stories.@(js|mdx)'],
    addons: [
        '@storybook/addon-notes/register',
        '@storybook/addon-actions/register',
        '@storybook/addon-links/register',
        '@storybook/addon-viewport/register',
        '@storybook/addon-knobs/register',
        '@storybook/addon-a11y/register',
        '@storybook/addon-options/register',
        '@storybook/preset-create-react-app',
        '@storybook/preset-scss',
        'react-storybook-addon-static-markup/register',
    ]
}