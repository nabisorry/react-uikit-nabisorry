const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.(js|tsx|mdx)"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-knobs/register",
    "@storybook/addon-viewport/register",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
      },
    },
    {
      name: "@storybook/addon-storysource",
      options: {
        rule: {
          test: [/\.stories\.tsx?$/],
          include: [path.resolve(__dirname, "../src")], // You can specify directories
        },
        loaderOptions: {
          prettierConfig: { printWidth: 80, singleQuote: false },
          parser: "typescript",
        },
      },
    },
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("babel-loader"),
          options: {
            presets: [["react-app", { flow: false, typescript: true }]],
          },
        },
        require.resolve("react-docgen-typescript-loader"),
      ],
    });
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
};
