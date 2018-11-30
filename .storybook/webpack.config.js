// load the default config generator.
var join = require('path').join
var root = join(__dirname, '..');

module.exports = (baseConfig, env, defaultConfig) => {
  const styleRuleIndex = defaultConfig.module.rules.findIndex(
    rule => 'apekatt.scss'.match(rule.test)
  );

  // Add sass-resource-loader to style rule
  defaultConfig.module.rules[styleRuleIndex].use.push({
    loader: 'sass-resources-loader',
    options: {
      resources: [
        join(root, './sass/reset.scss'),
        join(root, './sass/fonts.scss'),
      ],
    },
  })

  return defaultConfig;
}
