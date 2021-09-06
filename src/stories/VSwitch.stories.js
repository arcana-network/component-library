import "../components/styles.css";
import Switch from "../components/VSwitch/VSwitch.vue";

export default {
  title: "Components/VSwitch",
  component: Switch,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["elevated", "depressed", "popup"],
    },
  },
};

const Template = (args) => ({
  components: { Switch },
  setup() {
    const defaultCheck = false;
    return { args, defaultCheck };
  },
  template:
    '<Switch v-bind="args" v-model="defaultCheck"><h3>Hover over me</h3></Tooltip>',
});

export const Default = Template.bind({});
Default.args = {};
