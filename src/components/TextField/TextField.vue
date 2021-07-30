<template>
  <div class="form-group" aria-label="Form group">
    <label v-if="label" :style="[labelStyle]" :for="componentId">
      {{ label }}
    </label>
    <div class="text-field">
      <input
        :type="inputType"
        :id="componentId"
        :value="modelValue"
        @input="onInput"
        v-bind="attrs"
        :placeholder="placeholder"
      />
    </div>
    <span v-if="message" class="message" :class="messageType">
      {{ message }}
    </span>
  </div>
</template>

<style scoped>
div.form-group {
  display: inline-flex;
  flex-direction: column;
}
label {
  font-family: var(--font-body);
  color: var(--text-grey);
  font-weight: 400;
  font-size: 1.125em;
  line-height: 1.5em;
  margin: 10px 20px;
}
div.text-field {
  background: linear-gradient(141.48deg, #1a1a1a -4.56%, #151515 135.63%);
  box-shadow: inset -2px -2px 4px rgba(57, 57, 57, 0.44),
    inset 5px 5px 10px rgba(11, 11, 11, 0.5);
  border-radius: 10px;
  display: inline-block;
  padding: 10px 20px;
}
.message {
  font-family: var(--font-body);
  font-weight: 400;
  visibility: hidden;
  font-size: 0.94em;
  line-height: 1.5em;
  margin: 5px 20px;
}
.message.success {
  visibility: visible;
  color: #8fff00;
}
.message.error {
  visibility: visible;
  color: #ee193f;
}
input[type="text"],
input[type="password"] {
  border: none;
  box-shadow: none;
  background: transparent;
  outline: none;
  --webkit-outline: none;
  color: var(--text-white);
  font-family: var(--font-body);
  font-size: 1.1em;
  line-height: 1.5em;
}
input[type="text"]::placeholder,
input[type="password"]::placeholder {
  color: var(--text-grey);
  font-family: var(--font-body);
  font-size: 1.1m;
  line-height: 1.5em;
}
</style>

<script>
import { reactive } from "@vue/reactivity";
import { getRandomId } from "../utils";
export default {
  props: {
    labelStyle: [String, Object],
    inputStyle: [String, Object],
    messageStyle: [String, Object],
    placeholderStyle: [String, Object],
    label: String,
    message: String,
    id: String,
    validation: Function,
    modelValue: String,
    type: String,
    messageType: String,
    placeholder: String,
  },
  setup(props, { emit, attrs }) {
    props = reactive(props);
    let componentId = props.id?.trim() ?? getRandomId();

    let inputType = "text";
    if (props.type?.trim().toLowerCase() === "password") {
      inputType = "password";
    }

    function validate(ev) {
      if ("validation" in props && "call" in props.validation) {
        props.validation.call(ev.target?.value);
      }
    }

    function onInput(ev) {
      emit("update:modelValue", ev.target?.value);
    }

    return {
      componentId,
      validate,
      onInput,
      attrs,
      inputType,
    };
  },
};
</script>