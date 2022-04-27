// load the default config generator.
var join = require("path").join;
var root = join(__dirname, "..");

module.exports = ({mode, config}) => {
  // Find a rule that matches a file with the scss extension
  const sassRule = config.module.rules.find(rule =>
    typeof rule !== 'undefined' && typeof rule.test !== 'undefined' && "apekatt.scss".match(rule.test)
    //typeof rule.test != null && "apekatt.scss".match(rule.test)
  );

  console.log("module:");
  console.log(module);

  console.log("module.exports:");
  console.log(module.exports);

  console.log("config.module.rules:");
  console.log(config.module.rules);

  console.log("sassRule:");
  console.log(sassRule);

  console.log("sassRule.use:");
  console.log(sassRule.use);

  console.log("sassRule.loader:");
  console.log(sassRule.loader);

  // Add sass-resource-loader to style rule
  // .use is used when npm run dev
  // .loader is used when npm run build
  const loaderList = sassRule.use || sassRule.loader;
  console.log("loaderList");
  console.log(loaderList);
  loaderList.push({
    loader: "sass-resources-loader",
    options: {
      resources: [
        join(root, "./sass/reset.scss"),
        join(root, "./sass/fonts.scss")
      ]
    }
  });

  config.output.publicPath = '/';

  return config;
};
