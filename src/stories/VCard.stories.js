import "../components/styles.css";
import Card from "../components/VCard/VCard.vue";

export default {
  title: "Components/VCard",
  component: Card,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["elevated", "depressed", "popup"],
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

export const VCard = Template.bind({});
VCard.args = {
  variant: "elevated",
  cardStyle: {
    height: "150px",
    width: "30%",
  },
};
