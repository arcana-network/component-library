import "../components/styles.css";
import MyButton from "../components/VButton/VButton.vue";

export default {
  title: "Components/VButton",
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
  label: "Primary Button",
  variant: "primary",
  action: () => window.alert("Button clicked"),
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary Button",
  variant: "secondary",
  action: () => window.alert("Button clicked"),
};

export const Link = Template.bind({});
Link.args = {
  label: "Link Button",
  variant: "link",
  action: () => window.alert("Button clicked"),
};
