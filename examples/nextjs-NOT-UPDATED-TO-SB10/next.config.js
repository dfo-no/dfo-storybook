/* eslint no-use-before-define: 0 no-param-reassign: 0 */
const withTM = require('next-plugin-transpile-modules');
const withSass = require('@zeit/next-sass');

module.exports = withSass(
  withTM({
    transpileModules: [
      '@dfo/components',
    ],
    webpack(config) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '../../node_modules/foundation-sites': 'foundation-sites',
      };

      return config;
    },
  }),
);
