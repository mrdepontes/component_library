import React from 'react';

import { LineChart } from './LineChart';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Charts',
    component: LineChart,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
  };
  
  // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
  const Template = (args) => <LineChart {...args} />;
  
  export const SimpleLineChart = Template.bind({});
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  SimpleLineChart.args = {
    label: 'Tabs',
  };