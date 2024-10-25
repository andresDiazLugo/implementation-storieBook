import Button from "./button";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    type: {
      control: { type: "select", options: ["primary", "secondary", "terciary"] },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Submit",
  type: "primary",
  onClick:()=> alert("primary button"), // Funcionalidad de onClick
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Cancel",
  type: "secondary",
  onClick:()=> alert("secondary button"),
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  children: "Learn More",
  type: "terciary",
  onClick:()=> alert("terciary button"),
};