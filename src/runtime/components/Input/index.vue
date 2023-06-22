<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <label
    :for="htmlFor"
    :class="[getFlex()]"
  >
    <span :class="[getRequired()]">{{ label }}</span>

    <div
      v-if="showPassword"
      class="group"
    >
      <input
        v-if="type === 'password'"
        v-model="vModel"
        :class="[getSize()]"
        :name="htmlFor"
        :required="required"
        :value="value"
        :type="state.isShow === true ? 'text' : 'password'"
        placeholder="placeholder"
        @input="handleInput"
      >
      {{ state.isShow }}
      <svg
        v-if="!state.isShow"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        width="16"
        height="16"
        class="password-icon"
        @click="isPassword"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        width="16"
        height="16"
        class="password-icon"
        @click="isPassword"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    </div>
    <input
      v-else
      :class="[getSize()]"
      :name="htmlFor"
      :required="required"
      :value="value"
      :type="type"
      :placeholder="placeholder"
      @input="handleInput"
    >
  </label>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, computed } from "vue";
interface InputProps {
  htmlFor?: string;
  value?: string | number;
  label?: string;
  placeholder?: string;
  size?: "small" | "medium" | "large";
  required?: boolean;
  flex?: "row" | "col";
  type?: "text" | "email" | "password" | "number";
  showPassword?: boolean;
  vModel?: string;
}

export default defineComponent({
  props: {
    htmlFor: {
      type: String as PropType<InputProps["htmlFor"]>,
      default: "",
    },
    value: {
      type: String as PropType<InputProps["value"]>,
      default: "",
    },
    label: {
      type: String as PropType<InputProps["label"]>,
      default: "",
    },
    size: {
      type: String as PropType<InputProps["size"]>,
      default: "",
      validator: (value: string) =>
        ["small", "medium", "large"].includes(value),
    },
    placeholder: {
      type: String as PropType<InputProps["placeholder"]>,
      default: "Enter your text",
    },
    vModel: {
      type: String as PropType<InputProps["vModel"]>,
      default: '',
    },
    required: {
      type: Boolean as PropType<InputProps["required"]>,
      default: true,
    },
    flex: {
      type: String as PropType<InputProps["flex"]>,
      default: "col",
      validator: (value: string) => ["row", "col"].includes(value),
    },
    type: {
      type: String as PropType<InputProps["type"]>,
      default: "text",
      validator: (value: string) =>
        ["text", "email", "password", "number"].includes(value),
    },
    showPassword: {
      type: Boolean as PropType<InputProps["showPassword"]>,
      default: false,
    },
  },
  setup(props) {
    const state = reactive({
      size: props.size,
      required: props.required,
      flex: props.flex,
      type: props.type,
      isShow: false,
    });
    const getSize = () => {
      if (state.size === "large") {
        return "is-large";
      } else if (state.size === "medium") {
        return "is-medium";
      } else if (state.size === "small") {
        return "is-small";
      } else {
        return "is-default";
      }
    };
    const getRequired = () => {
      if (state.required) {
        return "is-required";
      } else {
        return "";
      }
    };
    const getFlex = () => {
      if (state.flex === "col") {
        return "is-col";
      } else if (state.flex === "row") {
        return "is-flex";
      }
    };
    const handleInput = (event: Event) => {
      if (state.type === "number") {
        const input = event.target as HTMLInputElement;
        const inputValue = input.value;
        const formattedValue = inputValue.replace(/[^0-9+-]/g, "");
        input.value = formattedValue;
      }
    };
    const isPassword = () => {
      state.isShow = !state.isShow;
    };


    return {
      isPassword,
      handleInput,
      getFlex,
      getRequired,
      getSize,
      state,
    };
  },
});
</script>

<style scoped>
input {
  @apply w-full border border-[#9E9E9E] rounded-xl bg-white placeholder:text-[#9E9E9E];
}
.is-large {
  @apply py-4 px-6 text-base placeholder:text-base;
}
.is-medium {
  @apply py-3 px-5 text-sm placeholder:text-sm;
}
.is-small {
  @apply py-2.5 px-4 text-xs placeholder:text-xs;
}
.is-default {
  @apply py-3.5 px-[18px] text-sm placeholder:text-sm;
}
.is-required {
  @apply w-fit relative after:content-['*'] after:absolute after:top-1 after:-right-2 after:text-red-500;
}
.is-col {
  @apply flex flex-col gap-1;
}
.is-flex {
  @apply flex gap-1;
}
.group {
  @apply relative;
}
.password-icon {
  @apply absolute top-1/2 w-4 h-4 right-2 -translate-y-1/2 cursor-pointer;
}
label span {
  @apply text-xs tracking-wide;
}
</style>
