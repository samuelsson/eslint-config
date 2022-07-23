# ESLint Config

This is for projects with TypeScript, Prettier and React.

## Installation

To be able to use this config we need to install `prettier` and `eslint` together with some base packages. We can do that with one command.

```shell
npx install-peerdeps @samuelsson/eslint-config --dev --yarn
```

This will install all required dependencies as devDependencies in your project. This will only install the bare minimum, and **you need to install additional packages** depending on what project you are developing.

Then you need to install the actual package including all configurations.

```shell
yarn add --dev @samuelsson/eslint-config
```

You also need to set some prettier rules. Create a `.prettierrc` file in the root directory and add this:

````json
{
  "singleQuote": true
}
````

When the config is installed we need to enable one of the configs. Add the property to your `package.json` and also pick what config to use.

### For projects with React and TypeScript

First install additional, required packages.

```shell
yarn add --dev \
  @typescript-eslint/eslint-plugin@^5.30.7 \
  @typescript-eslint/parser@^5.30.7 \
  eslint-config-airbnb@^19.0.4 \
  eslint-plugin-jsx-a11y@^6.6.1 \
  eslint-plugin-react@^7.30.1 \
  eslint-plugin-react-hooks@^4.6.0
```

Then add the correct config to your project. You also need to specify what environments you will be using with this project if not default es6 in browser. This example is using environments for Next.js (both browser and node) with jest, and is set in `package.json`.

```json
{
  "eslintConfig": {
    "root": true,
    "extends": "@samuelsson/eslint-config/react-typescript",
    "env": {
      "es6": true,
      "shared-node-browser": true,
      "jest": true
    }
  }
}
```

Lastly add the lint script to your `package.json`.

```json
{
  "scripts": {
    "lint": "eslint ./ --ext .js,.ts,.tsx"
  }
}
```
