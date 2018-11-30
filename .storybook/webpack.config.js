// load the default config generator.
var join = require("path").join;
var root = join(__dirname, "..");

module.exports = (baseConfig, env, defaultConfig) => {
  const sassRule = defaultConfig.module.rules.find(rule =>
    "apekatt.scss".match(rule.test)
  );

  // Add sass-resource-loader to style rule
  if (sassRule && sassRule.use) {
    sassRule.use.push({
      loader: "sass-resources-loader",
      options: {
        resources: [
          join(root, "./sass/reset.scss"),
          join(root, "./sass/fonts.scss")
        ]
      }
    });
  }

  return defaultConfig;
};
