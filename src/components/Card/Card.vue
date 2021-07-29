<template>
  <section :style="[cardStyle]" :class="['card', classes, cardClass]" aria-label="card">
    <slot name="header" aria-label="card header"></slot>
    <slot name="content" aria-label="card content"></slot>
    <slot name="footer" aria-label="card footer"></slot>
  </section>
</template>

<style scoped>
.card {
  display: flex;
  border-radius: 20px;
  background: radial-gradient(134.5% 939.99% at -23.59% -12.9%, #262626 0%, rgba(26, 26, 26, 0.86293) 31.41%, rgba(32, 32, 32, 0.49) 100%);
}
.card.elevated {
  box-shadow: 4px 5px 4px rgba(0, 0, 0, 0.25);
}
.card.depressed {
  box-shadow: inset -2px -2px 4px rgba(57, 57, 57, 0.44), inset 5px 5px 10px rgba(11, 11, 11, 0.5);
}
</style>

<script>
import { reactive } from '@vue/reactivity'
import { computed } from '@vue/runtime-core';
export default {
  props: {
    variant: String,
    cardClass: [String, Object],
    cardStyle: [String, Object]
  },
  setup(props) {
    props = reactive(props);

    const classes = computed(() => {
      if(props.variant?.trim()) {
        const variant = props.variant.toLowerCase();
        if(variant === "depressed") {
          return {
            depressed: true,
            elevated: false
          }
        }
        return {
          depressed: false,
          elevated: true
        }
      }
    });

    return {
      classes
    }
  },
}
</script>