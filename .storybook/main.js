module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/components/**/*.stories.@(js|jsx|ts|tsx)",
    "../stories/elements/**/*.stories.@(js|jsx|ts|tsx)",
    "../stories/pages/*.stories.@(js|jsx|ts|tsx)",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/react"
}