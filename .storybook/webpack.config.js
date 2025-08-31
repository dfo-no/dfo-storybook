// load the default config generator.
var join = require("path").join;
var root = join(__dirname, "..");

module.exports = ({mode, config}) => {
  // Find a rule that matches a file with the scss extension
  const sassRule = config.module.rules.find(rule =>
    "apekatt.scss".match(rule.test)
  );

  // Removed sass-resources-loader injection

  // config.output.publicPath = '/'; // Commented out as it caused issues with Storybook 9 -> It gave a double slash in the path to static files. It's now automatically handled by Storybook.

  return config;
};
