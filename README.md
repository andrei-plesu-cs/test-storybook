# Create design system with Storybook and React and publish it to NPM to consume it in other projects as package dependency.

This project shows a minimal Storybook workflow with React, that exposes a simple input component built with styled components.\
It then uses Babel to transpile and build the project, then is published to NPM to a scoped package.\
At last, the package can then be used as a dependency in other projects so the components defined here could be used as reusable components.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Usage

To use the project in development (to define and test reusable components using Storybook), run: `npm run storybook`.

This will start a local server on port 6006 by default and from there you can view and edit your components through the
Storybook UI

## Creating a new component

In order to define a new component:
1. Define it in the components folder using the same pattern as the example Input component (`index.js` for the main 
file and `<component_name>Wrapper.js` for the styled component that applies style to the new component).
2. Import the component in the file index.js located at the root of src/ folder. Export it as well to be included in
the published package.
3. Build the project with `npm run build` to generate the dist folder that will be used by NPM on publish to update the
package.

## Publishing changes to NPM

In order to pubilsh the new changes to NPM:
1. Increase the patch version of the project by one to signal NPM about the update (for example if current version is 0.1.5 you 
have to change it to 0.1.6).
2. Publish the project to NPM using `npm publish --access=public`
3. All set here. Now on the projects that consume the package and you wish to see the updates made, you have to update the package by
running `npm install <package_name>` which will update to the last version.

## Learn more

### Storybook documentation

[Storybook docs](https://storybook.js.org/docs/react/get-started/introduction)

### Creating a design system (with component testing, documentation an CI)

[Design systems for developers](https://storybook.js.org/tutorials/design-systems-for-developers/react/en/introduction/)
