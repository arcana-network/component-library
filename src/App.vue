<template>
  <div class="container column">
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
    <Dropdown
      :options="['Tesla', 'Mercedes', 'BMW']"
      placeholder="Select Car"
    />
    <Tooltip title="Testing tooltip">
      <span class="sub-heading-2">Sample Data</span>
    </Tooltip>
    <text-field
      v-model="textValue"
      @keyup="onKeyup"
      message="Some random"
      id="sample"
      label="test"
    />
    <div class="body-2" style="margin-bottom: 10px">{{ textValue }}</div>
    <div class="flex row" style="gap: 20px; margin-bottom: 10px">
      <Switch v-model="switchState" variant="large" />
      <Switch v-model="switchState" />
    </div>
    <Progress :percentage="30" state="error" />
  </div>
</template>

<script>
import { ref } from "@vue/runtime-core";
import TextField from "./components/TextField/TextField.vue";
import Switch from "./components/Switch/Switch.vue";
import Progress from "./components/Progress/Progress.vue";
import Dropdown from "./components/Dropdown/Dropdown.vue";
import Tooltip from "./components/Tooltip/Tooltip.vue";
export default {
  name: "App",
  components: { TextField, Switch, Progress, Dropdown, Tooltip },
  setup() {
    const textValue = ref("");
    const switchState = ref(false);

    function onKeyup() {
      console.log("Keyup", textValue);
    }

    return {
      textValue,
      onKeyup,
      switchState,
    };
  },
};
</script>

<style>
</style>
