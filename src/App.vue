<template>
  <div>
    <h1>H1 HEADING</h1>
    <h2>H2 HEADING</h2>
    <h3>H3 HEADING</h3>
    <h4>H4 HEADING</h4>
    <h5>H5 HEADING</h5>
    <div><span class="sub-heading-1">Sub Heading 1</span></div>
    <div><span class="sub-heading-2">Sub Heading 2</span></div>
    <div><span class="sub-heading-3">Sub Heading 3</span></div>
    <div><span class="sub-heading-4">Sub Heading 4</span></div>
    <div><span class="sub-heading-5">Sub Heading 5</span></div>
    <div><span class="body-1">Body 1</span></div>
    <div><span class="body-2">Body 2</span></div>
    <div><span class="body-3">Body 3</span></div>
  </div>
</template>

<script>
import { onMounted, ref } from "@vue/runtime-core";
export default {
  name: "App",
  components: {  },
  setup() {
    const smallButton = ref("");
    const buttonColor = ref("");

    function alertClick(type) {
      console.log("Alert click", type);
    }

    onMounted(() => {
      smallButton.value = "small";
      buttonColor.value = "secondary";
      console.log(smallButton);
      setTimeout(() => {
        smallButton.value = "medium";
        buttonColor.value = "primary";
        console.log(smallButton);
      }, 2000);
    });

    return {
      smallButton,
      buttonColor,
      alertClick,
    };
  },
};
</script>

<style>
</style>
