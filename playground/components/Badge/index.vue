<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <button
    :class="buttonClass"
    :data-value="value"
    :data-max="max"
  >
    <span :class="dotClass">{{ displayValue }}</span>
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    value: {
      type: [Number, String],
      default: undefined,
    },
    max: {
      type: Number,
      default: undefined,
    },
    isDot: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "primary",
      validator: (value) => ["primary", "warning"].includes(value),
    },
    className: {
      type: String,
      default: undefined,
    },
    dir: {
      type: String,
      default: "right",
      validator: (value) => ["right", "left"].includes(value),
    },
  },
  computed: {
    displayValue() {
      return this.value && this.value >= this.max ? `${this.max}+` : this.value;
    },
    buttonClass() {
      return `relative dark-blue px-4 py-2 rounded hover:bg-blue-300 hover:bg-opacity-20 dark:bg-black  ${
        this.className ? this.className : ""
      }`;
    },
    dotClass() {
      return `absolute text-xs top-0 -translate-y-1/2 px-0.5 rounded ${
        this.dirClass
      } ${this.typeClass} ${this.isDot ? "w-2 h-2 rounded-3xl" : ""}`;
    },
    dirClass() {
      if (this.dir === "right") {
        return "right-0 translate-x-1/2";
      } else if (this.dir === "left") {
        return "left-0 -translate-x-1/2";
      } else {
        return "right-0 translate-x-1/2";
      }
    },
    typeClass() {
      if (this.type === "primary") {
        return "bg-green-500";
      } else if (this.type === "warning") {
        return "bg-orange-500";
      } else {
        return "bg-blue-500";
      }
    },
  },
};
</script>


<style scoped>

</style>
