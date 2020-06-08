module.exports = {        
  "parser": "babel-eslint",
  "extends": "airbnb",
  "rules": {
    "linebreak-style": ["error", process.platform === 'win32' ? 'windows': 'unix'], // allow Windows-style line endings on Windows platform, git should commit Unix-style
    "max-len": [
      2,
      {
        "code": 150,
        "tabWidth": 2,
        "ignoreUrls": true
      }
    ],
    "react/prefer-stateless-function": 0,
    "react/forbid-prop-types": 0,
    "react/jsx-filename-extension": 0,
    "react/destructuring-assignment": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-props-no-spreading": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/label-has-associated-control": [
      2,
      {
        "labelAttributes": [
          "label"
        ],
        "depth": 3
      }
    ],
    "jsx-a11y/label-has-for": 0
  },
  "overrides": [
    {
      "files": [
        "*.stories.js"
      ],
      "rules": {
        "import/no-extraneous-dependencies": "off",
        "import/no-webpack-loader-syntax": "off",
        "import/no-unresolved": "off",
        "global-require": "off"
      }
    },
    {
      "files": [
        "src/[A-Z]*/index.js"
      ],
      "rules": {
        "import/prefer-default-export": "off"
      }
    },
    {
      "files": "examples/**/*.js",
      "rules": {
        "import/no-unresolved": "off"
      }
    }
  ],
  "env": {
    "browser": true,
    "node": true
  }
};