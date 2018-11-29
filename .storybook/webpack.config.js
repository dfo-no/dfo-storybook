// load the default config generator.
var join = require('path').join
var root = join(__dirname, '..');

var transpileModules = [] // list node modules that needs transpiling
var babelifyDirs = [root].concat(
  transpileModules.map(mod => join(root, 'node_modules', mod))
)

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.forEach((rule, index) => {
    if (!'apekatt.scss'.match(rule.test)) {
      return;
    }

    defaultConfig.module.rules[index].use.push({
      loader: 'sass-resources-loader',
      options: {
        resources: [
          join(root, './sass/base/_index.scss'),
          join(root, './sass/reset.scss'),
        ],
      },
    })
  });

  return defaultConfig;
}
