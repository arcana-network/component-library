import "../components/styles.css";
import MyButton from "../components/Button/Button.vue";

export default {
  title: "Components",
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

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  label: "Button",
  variant: "primary",
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  label: "Button",
  variant: "secondary"
};

export const LinkButton = Template.bind({});
LinkButton.args = {
  label: "Button",
  variant: "link"
};