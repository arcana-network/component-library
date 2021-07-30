import "../components/styles.css";
import Card from "../components/Card/Card.vue";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["elevated", "depressed"],
    },
  },
};

const Template = (args) => ({
  components: { Card },
  setup() {
    return { args };
  },
  template: '<Card v-bind="args" />',
});

export const Elevated = Template.bind({});
Elevated.args = {
  variant: "elevated",
  cardStyle: {
    height: "150px",
    width: "30%",
  },
};

export const Depressed = Template.bind({});
Depressed.args = {
  variant: "depressed",
  cardStyle: {
    height: "150px",
    width: "30%",
  },
};
