import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import WidgetTemplate from ".";

export default {
  title: "ReactComponentLibrary/WidgetTemplate",
  component: WidgetTemplate,
} as ComponentMeta<typeof WidgetTemplate>;

const Template: ComponentStory<typeof WidgetTemplate> = (args) => (
  <WidgetTemplate {...args} />
);

export const TemplateWidget = Template.bind({});
