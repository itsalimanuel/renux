<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <button
    :class="[
      getTypeClass(),
      getSizeClass(),
      { 'cursor-not-allowed': disabled || loading },
      { 'is-loading': loading },
      { 'bg-opacity-50 hover:bg-opacity-100 transition-colors': plain },
      className,
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot></slot>
    <svg
      v-if="loading"
      aria-hidden="true"
      class="inline w-4 h-4 ml-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill"
      />
    </svg>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

interface ButtonProps {
  type?: "primary" | "success" | "info" | "warning" | "danger";
  disabled?: boolean;
  plain?: boolean;
  size?: "small" | "medium" | "large";
  className?: string;
  loading?: boolean;
  onClick?: (event: MouseEvent) => void;
}

export default defineComponent({
  props: {
    type: {
      type: String as PropType<ButtonProps["type"]>,
      default: "primary",
      validator: (value: string) =>
        ["primary", "success", "info", "warning", "danger"].includes(value),
    },
    disabled: {
      type: Boolean as PropType<ButtonProps["disabled"]>,
      default: false,
    },
    plain: {
      type: Boolean as PropType<ButtonProps["plain"]>,
      default: false,
    },
    size: {
      type: String as PropType<ButtonProps["size"]>,
      default: "medium",
      validator: (value: string) =>
        ["small", "medium", "large"].includes(value),
    },
    className: {
      type: String as PropType<ButtonProps["className"]>,
      default: "",
    },
    loading: {
      type: Boolean as PropType<ButtonProps["loading"]>,
      default: false,
    },
    onClick: {
      type: Function as PropType<ButtonProps["onClick"]>,
      default: null,
    },
  },
  methods: {
    handleClick(event: MouseEvent) {
      if (!this.disabled && !this.loading && this.onClick) {
        this.onClick(event);
      }
    },
    getTypeClass() {
      if (this.type === "info") {
        return "type-info";
      } else if (this.type === "success") {
        return "type-success";
      } else if (this.type === "warning") {
        return "type-warning";
      } else if (this.type === "danger") {
        return "type-danger";
      } else {
        return "type-default";
      }
    },
    getSizeClass() {
      if (this.size === "small") {
        return "is-small";
      } else if (this.size === "medium") {
        return "is-medium";
      } else if (this.size === "large") {
        return "is-large";
      } else {
        return "is-default";
      }
    },
  },
});
</script>

<style scoped>
.type-info {
  @apply text-gray-900  focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700;
}
.is-loading {
  @apply bg-opacity-60 cursor-not-allowed;
}
.type-success {
  @apply focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800;
}
.type-warning {
  @apply focus:outline-none text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-900;
}
.type-danger {
  @apply focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900;
}
.type-default {
  @apply bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-white dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800;
}
.is-large {
  @apply px-5 py-3 text-base font-medium;
}
.is-medium {
  @apply px-3 py-2 text-sm font-medium;
}
.is-default {
  @apply text-sm px-5 py-2.5;
}
.is-small {
  @apply px-3 py-2 text-xs font-medium;
}
/* Add your custom styles here */
</style>
