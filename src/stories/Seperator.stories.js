import "../components/styles.css";
import MySeperator from "../components/Seperator/Seperator.vue";

export default {
  title: "Components",
  component: MySeperator,
};

const Template = (args) => ({
  components: { MySeperator },
  setup() {
    return { args };
  },
  template: '<MySeperator />',
});

export const Seperator = Template.bind({});