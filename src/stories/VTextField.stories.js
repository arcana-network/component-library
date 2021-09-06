import "../components/styles.css";
import MyTextField from "../components/VTextField/VTextField.vue";

export default {
  title: "Components/VTextField",
  component: MyTextField,
  argTypes: {
    messageType: {
      control: { type: "select" },
      options: ["success", "error", "none"],
    },
    type: {
      control: { type: "select" },
      options: [
        "text",
        "password",
        "number",
        "date",
        "datetime-local",
        "email",
        "month",
        "search",
        "tel",
        "time",
        "week",
      ],
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
  label: "Name",
  placeholder: "Enter valid name",
  noMessage: true,
};

export const PasswordField = Template.bind({});
PasswordField.args = {
  name: "password",
  label: "Password",
  placeholder: "Enter Here",
  message: "Incorrect password",
  messageType: "error",
};
