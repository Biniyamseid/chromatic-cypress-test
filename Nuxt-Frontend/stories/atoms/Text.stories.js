/** @format */

import Text from "./Text.vue";

const meta = {
  title: "Atoms/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },
    size: { control: "number" },
    weight: { control: "select", options: ["bold", "semi-bold", "normal"] },
  },
  args: {
    text: "Text",
    size: 16,
    weight: "normal",
    color: "white",
  },
};

export default meta;

export const Bold = {
  args: {
    weight: "bold",
    text: "Bold Text",
  },
};

export const SemiBold = {
  args: {
    weight: "semi-bold",
    text: "Semi-Bold Text",
  },
};

export const Normal = {
  args: {
    text: "Normal Text",
  },
};

export const Large = {
  args: {
    size: 20,
    text: "Large Text",
  },
};

export const Medium = {
  args: {
    text: "Medium Text",
  },
};

export const Small = {
  args: {
    size: 12,
    text: "Small Text",
  },
};
