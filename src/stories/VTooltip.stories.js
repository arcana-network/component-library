import "../components/styles.css";
import Tooltip from "../components/VTooltip/VTooltip.vue";

export default {
  title: "Components/VTooltip",
  component: Tooltip,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["elevated", "depressed", "popup"],
    },
  },
};

const Template = (args) => ({
  components: { Tooltip },
  setup() {
    return { args };
  },
  template: '<Tooltip v-bind="args"><h3>Hover over me</h3></Tooltip>',
});

export const Default = Template.bind({});
Default.args = {
  title: "Hovered tooltip",
  delay: "1s",
};
