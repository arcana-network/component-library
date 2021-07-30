import "../components/styles.css";
import MyTextField from "../components/TextField/TextField.vue";

export default {
  title: "Components/TextField",
  component: MyTextField,
  argTypes: {
    messageType: {
      control: { type: "select" },
      options: ["success", "error", "none"],
    },
    type: {
      control: { type: "select" },
      options: ["text", "password"],
    },
  },
};

const Template = (args) => ({
  components: { MyTextField },
  setup() {
    return { args };
  },
  template: '<MyTextField v-bind="args" />',
});

export const TextField = Template.bind({});
TextField.args = {
  id: "simple-input",
  name: "simple-input",
};

export const PasswordField = Template.bind({});
PasswordField.args = {
  type: "password",
};
