## 🤓 Development
In order to work on the components you first need to clone the repo, install the dependencies by writing `npm install` and after that: `npm start`.

### 🔗 npm link
If you're working on both a project and the components at the same time, having to finish the component before publishing and installing the new version gets a bit tedious.

For a smoother workflow you can `npm link` the components into your project and work seamlessly-ish. Navigate your terminal to where you cloned this repository and write `npm link`. The terminal should say something like this:

```sh
/Users/kbrabrand/.nvm/versions/node/v8.11.4/lib/node_modules/@dfo/components -> /Users/kbrabrand/development/netlife/dfo/dfo-storybook
```

When that is done, you can go to a project where you've installed `@dfo/components` as a dependency and write `npm link @dfo/components`. NPM will replace the old folder with the dependency from npmjs.com with a symlink to the folder you just linked.

### 📋👮 Code rules and guidelines

- All styles are written with SCSS (SASS)
- Follow the airbnb-sass-styleguide: https://github.com/airbnb/css
- Use the BEM methodology: http://getbem.com/
- Follow the WCAG 2.0 guidelines, with DIFI's modifications: https://uu.difi.no/krav-og-regelverk/wcag-20-standarden
- Ensure that components and their significant variations are documented in Storybook.
- Avoid breaking changes to components
    - Think through the API of each component. We don't want to force consumers of this library to change if we can avoid it.
    - If a breaking change can't be avoided be sure to signal it with a major version bump.
    - [Follow semantic versioning](https://docs.npmjs.com/about-semantic-versioning).

