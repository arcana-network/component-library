import "../components/styles.css";
import MyButton from "../components/Button/Button.vue";

export default {
  title: "Components/Button",
  component: MyButton,
  argTypes: {
    label: "Button",
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "link"],
    },
  },
};

const Template = (args) => ({
  components: { MyButton },
  setup() {
    return { args };
  },
  template: '<MyButton v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
  variant: "secondary"
};

export const Link = Template.bind({});
Link.args = {
  label: "Button",
  variant: "link"
};