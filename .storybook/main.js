module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../Shapes/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: '@storybook/addon-docs',
      options: { configureJSX: true },
    },
  ],
  "framework": "@storybook/react"
}