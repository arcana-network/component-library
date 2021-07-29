<template>
  <div :style="[styleCardByProps, cardStyle]" :class="cardClass">
    <slot name="header"></slot>
    <slot name="content"></slot>
    <slot name="footer"></slot>
  </div>
</template>