import "../components/styles.css";
import MyButton from "../components/VCardButton/VCardButton.vue";

export default {
  title: "Components/VCardButton",
  component: MyButton,
  argTypes: {
    label: "Card Button",
  },
};

const Template = (args) => ({
  components: { MyButton },
  setup() {
    return { args };
  },
  template: '<MyButton v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  label: "Default Card Button",
};

export const Active = Template.bind({});
Active.args = {
  label: "Active Card Button",
  active: true,
};
