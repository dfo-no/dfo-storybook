## Using the components in your project

Short summary: To install, write `npm install @dfo/components` in the terminal. NPM will let you know which `peerDependencies` you need to install with it. Alternatively, you can write `npx install-peerdeps @dfo/components` which will install both the components and its peers.

### Next.js
In order to use the components in your project there's a few things you need to do. If you'd rather see an example project, a working project with next@7 can be found under `/examples/nextjs`.

1. Adding the dependencies: `npx install-peerdeps @dfo/components` (if you don't already have `npx` installed, you need to: `npm i -g npx`).
2. Do `npm i --save-dev node-sass @zeit/next-sass` in order to be able compile scss files both from the component library and your own project.
3. In order for nextjs to transpile modules from the `node_modules` folder, we need to augument the configuration. Modifying the babel config is not easy, so we'll pull inn a module that does just this: `npm i --save-dev next-plugin-transpile-modules`.
4. Create a `next.config.js` in the root of your project containing what you need, but at least this:

```js
const withTM = require('next-plugin-transpile-modules');
const withSass = require('@zeit/next-sass');

module.exports = withSass(
  withTM({
    // this is needed for next to transpile the folder in node_modules
    transpileModules: [
      '@dfo/components',
    ],
    webpack(config) {
      config.resolve.alias = {
        ...config.resolve.alias,

        // this is needed for next to resolve the foundation-sites references
        '../../node_modules/foundation-sites': 'foundation-sites'
      }

      return config;
    }
  }),
);
```

This lets next know that the module called `@dfo/components` shoul be transpiled along with everything else inside the app.

5. Start using the components. Like this, in `pages/index.js`:

```js
import React from 'react';
import { Button } from '@dfo/components';

export default () => <div>
  <h1>You can haz... 🥁</h1>
  <Button>BUTTON</Button>
</div>
```

### Vanilla React project
In order to use the components in your project there's a few things you need to do. If you'd rather see an example project, a working project with webpack@4 and babel@8 can be found under `/examples/simple-react`.

1. Adding the dependencies: `npx install-peerdeps @dfo/components` (if you don't already have `npx` installed, you need to: `npm i -g npx`)
2. Add a `babel.config.js` (given that you're on `babel@>7`) containing whatever babel configs you need. You should at least have these two:

```js
module.exports = {
    "presets": [
      "@babel/preset-env",
      "@babel/preset-react",
    ],
    "plugins": [
      "@babel/plugin-proposal-class-properties",
    ],
},
```

3. Modify the exclude option for your babel loader so that it doesn't exclude the `@dfo/components` folder in node modules:

```js
{
  test: /\.jsx?$/,
  exclude: /node_modules\/(?!@dfo\/components)/,
  use: {
    loader: "babel-loader",
  },
},
```

4. Add SASS resource loader by writing `npm i --save-dev sass-resources-loader`. We'll need this in the next step when we set up loading of base styles.

5. Make SCSS base (variables, colors etc.) available for every scss file compiled by webpack by adding the `sass-resource-loader` to all style transformation:

```js
{
  loader: 'sass-resources-loader',
  options: {
    resources: [
      './node_modules/@dfo/components/sass/base/_index.scss',
      './node_modules/@dfo/components/sass/reset.scss',
      './node_modules/@dfo/components/sass/fonts.scss',
    ],
  },
}
```

6. Add file loader to your project if you don't have it (`npm i --save-dev file-loader`) and add the following to your webpack config in order to let webpack know what to do with the font files from `@dfo/components`:

```js
{
  test: /\.(woff(2)?|ttf|eot|otf|svg)(\?v=\d+\.\d+\.\d+)?$/,
  use: [{
      loader: 'file-loader',
      options: {
          name: '[name].[ext]',
          outputPath: 'fonts/',
      },
  }],
}
```

7. Add resolve alias for foundation-site references by adding the following to your webpack config:

```js
{
  resolve: {
    alias: {
      '../../node_modules/foundation-sites': 'foundation-sites',
    },
  },
},
```

8. Start using the components:

```jsx
import { Button } from '@dfo/components';

// Preferablt import once per chunk only to keep
// the bundle size down
import '@dfo/sass/reset';
import '@dfo/sass/fonts';

export default function MyAwesomeApp() {
  return (
    <div>
      <Button plainLink href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
        Awesome stuff
      </Button>
    </div>
  );
}
```

9. 🚀

