import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Widget from "./widget";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/widget",
  component: Widget,
} as ComponentMeta<typeof Widget>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Widget> = (args) => <Widget {...args} />;

export const TestWidget = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
