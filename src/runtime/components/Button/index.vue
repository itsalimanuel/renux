<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <button
    :class="[
      getTypeClass(),
      getSizeClass(),
      getIconClass(),
      { 'is-disabled': disabled || loading },
      { 'is-loading': loading },
      { 'bg-opacity-50 hover:bg-opacity-100 transition-colors': plain },
      className,
    ]"
    class="btn is-hover"
    :disabled="disabled"
    @click="handleClick"
  >
    <img
      v-if="icon"
      :src="icon"
      alt="Icon"
      class="icon-renux"
    >
    <slot />
    <svg
      v-if="loading"
      aria-hidden="true"
      class="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
import { defineComponent, PropType, reactive } from "vue";

interface ButtonProps {
  type?: "primary" | "success" | "info" | "warning" | "danger";
  disabled?: boolean;
  plain?: boolean;
  size?: "small" | "medium" | "large";
  className?: string;
  loading?: boolean;
  icon?: string;
  iconIs?: "right" | "left";
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
    icon: {
      type: String as PropType<ButtonProps["icon"]>,
      default: null,
    },
    iconIs: {
      type: String as PropType<ButtonProps["iconIs"]>,
      default: "left",
    },
  },
  setup(props) {
    const state = reactive({
      disabled: props.disabled || false,
      loading: props.loading || false,
    });

    const handleClick = (event: MouseEvent) => {
      if (!state.disabled && !state.loading && props.onClick) {
        props.onClick(event);
      }
    };

    const getTypeClass = () => {
      if (props.type === "info") {
        return "type-info";
      } else if (props.type === "success") {
        return "type-success";
      } else if (props.type === "warning") {
        return "type-warning";
      } else if (props.type === "danger") {
        return "type-danger";
      } else {
        return "type-default";
      }
    };

    const getSizeClass = () => {
      if (props.size === "small") {
        return "is-small";
      } else if (props.size === "medium") {
        return "is-medium";
      } else if (props.size === "large") {
        return "is-large";
      } else {
        return "is-default";
      }
    };

    const getIconClass = () => {
      return {
        "flex flex-row-reverse": props.iconIs === "right",
        flex: props.iconIs === "left",
      };
    };

    return {
      state,
      handleClick,
      getTypeClass,
      getSizeClass,
      getIconClass,
    };
  },
});

</script>

<style scoped>
/* types */
.btn {
  @apply flex gap-5 items-center rounded;
}
.type-default {
  @apply bg-black text-white;
}
.type-info {
  @apply bg-slate-400 text-black hover:text-white;
}

.type-success {
  @apply bg-[#11C0A1]  text-black;
}
.type-warning {
  @apply bg-[#FF4930] text-white;
}
.type-danger {
  @apply bg-[#D81A22] text-white;
}
.is-small {
  @apply text-xs py-2 px-1.5 font-light;
}
.is-default {
  @apply text-sm px-[15px] py-[7px] font-light;
}
.is-medium {
  @apply px-5 py-2.5 text-sm font-medium;
}

.is-large {
  @apply px-6 py-3 text-base font-medium;
}

/* is loading */
.is-loading {
  @apply bg-opacity-60 cursor-not-allowed;
}
.is-hover {
  @apply hover:bg-opacity-80 transition-all;
}
.icon-renux {
  @apply max-w-[25px] max-h-[20px];
}
.is-disabled {
  @apply cursor-not-allowed;
}
/* Add your custom styles here */
</style>
