# @dfo/components
A collection of frontend components and building blocks for Direktoratet for Økonomistyring (DFØ). The components are built with react and SCSS.

To install, write `npm install @dfo/components` in the terminal. NPM will let you know which `peerDependencies` you need to install with it. Alternatively, you can write `npx install-peerdeps @dfo/components` which will install both the components and its peers.

## 📖 Documentation 
The components are documented using [storybook](https://storybook.js.org/). To start it, run `npm start storybook` after you've cloned the repository and installed the \[storybook\] dependencies.

The documentation is deployed to https://komponenter.dfo.no.

### Deploying the storybook
Run `npm run build` to create a static build in a folder called `storybook-static/` and upload the storybook to wherever you want to host it from.

--- 

## Using the components in your project for the first time
In order to use the components in your project there's a few things you need to do. If you'd rather see an example project, a working project with webpack@4 and babel@8 can be found under `/examples`.

1. Adding the dependencies: `npx install-peerdeps @dfo/components` (if you don't already have `npx` installed, you need to: `npm i -g npx`)
2. Add a `babel.config.js` (given that you're on `babel@>7`) containing whatever babel configs you need. You should at least have these two:

```js
module.exports = {
    "presets": [
      "@babel/preset-env", 
      "@babel/preset-react"
    ]
}
```

3. Modify the exclude option for your babel loader so that it doesn't exclude the `@dfo/components` folder in node modules:

```js
{
  test: /\.jsx?$/,
  exclude: /node_modules\/(?!@dfo\/components)/,
  use: {
    loader: "babel-loader"
  }
}
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
      './node_modules/@dfo/components/sass/fonts.scss'
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
          outputPath: 'fonts/'
      }
  }]
}
```

7. Start using the components:

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

8. 🚀

---

## 🤓 Development 
In order to work on the components you first need to clone the repo, install the dependencies by writing `npm install` and after that: `npm start`.

### 📋 Rules

- All styles are written with SCSS (SASS)
- Follow the airbnb-sass-styleguide: https://github.com/airbnb/css
- Use the BEM methodology: http://getbem.com/
- All of the React-components has to be functional components (no state), because we will only be using the rendered markup.
- Follow the WCAG 2.0 guidelines, with DIFI's modifications: https://uu.difi.no/krav-og-regelverk/wcag-20-standarden

### 📦 Our SASS dependencies

(TODO: Spell out dependencies that our SASS code relies on.)

### 👮 Extra SASS rules

(TODO: Describe our Sass conventions)
