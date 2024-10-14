import Divider from "../../components/atoms/AtomSeparator.vue";

const meta = {
  title: "Atoms_And_Molecules/Separator",
  tags: ["autodocs"],
  component: Divider,
  parameters: {
    docs: {
      description: {
        component:
          "A divider component with gradient lines and 'Or' text in the middle, used to separate content sections.",
      },
    },
  },
};

export default meta;

export const Default = {
  parameters: {
    docs: {
      storyDescription:
        "The default divider with 'Or' text and gradient lines on a dark background.",
    },
  },
  render: () => ({
    components: { Divider },
    template: `
      <div class="p-4 bg-black">
        <Divider />
      </div>
    `,
  }),
};
