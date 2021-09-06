import "../components/styles.css";
import MySeperator from "../components/VSeperator/VSeperator.vue";

export default {
  title: "Components/VSeperator",
  component: MySeperator,
};

const Template = (args) => ({
  components: { MySeperator },
  setup() {
    return { args };
  },
  template: '<MySeperator v-bind="args"  />',
});

export const Default = Template.bind({});

export const Vertical = Template.bind({});
Vertical.args = {
  vertical: true,
  style: {
    width: "1px",
    height: "100vh",
  },
};
