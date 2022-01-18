import React from 'react';

import { Tabs } from './Tabs';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Tabs',
    component: Tabs,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
  };
  
  // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
  const Template = (args) => <Tabs {...args} />;
  
  export const Primary = Template.bind({});
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  Primary.args = {
    label: 'Tabs',
  };