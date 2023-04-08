/** @type { import('@storybook/react').Preview } */
import { withKnobs } from '@storybook/addon-knobs';
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      addons: ['@storybook/addon-knobs'],
    },
  },
};
// module.exports = {
//   addons: ['@storybook/addon-knobs'],
// };


export default preview;
