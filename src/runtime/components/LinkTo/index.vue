<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <NuxtLink
      v-if="!state.disabled"
      :class="[className, getType(), setUnderline(), getDisabled()]"
      :target="getTarget()"
      :to="to"
    >
      <slot />
    </NuxtLink>
    <span v-else :class="[className, getType(), setUnderline(), getDisabled()]">
      <slot />
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from "vue";
interface LinkProps {
  type?: "info" | "success" | "warning" | "danger";
  to?: string;
  target?: "blank" | "self" | "parent" | "top" | "framename";
  className?: string;
  underline?: boolean;
  disabled?: boolean;
}
export default defineComponent({
  props: {
    type: {
      type: String as PropType<LinkProps["type"]>,
      default: "",
      validator: (value: string) =>
        ["info", "success", "warning", "danger"].includes(value),
    },
    to: {
      type: String as PropType<LinkProps["to"]>,
      default: "",
    },
    target: {
      type: String as PropType<LinkProps["target"]>,
      default: "",
      validator: (value: string) =>
        ["blank", "self", "parent", "top", "framename"].includes(value),
    },
    className: {
      type: String as PropType<LinkProps["className"]>,
      default: "",
    },
    underline: {
      type: Boolean as PropType<LinkProps["underline"]>,
      default: false,
    },
    disabled: {
      type: Boolean as PropType<LinkProps["disabled"]>,
      default: false,
    },
  },
  setup(props) {
    const state = reactive({
      type: props.type,
      to: props.to,
      target: props.target,
      underline: props.underline,
      disabled: props.disabled,
    });
    const getTarget = () => {
      if (state.target === "blank") {
        return "_blank";
      } else if (state.target === "top") {
        return "_top";
      } else if (state.target === "self") {
        return "_self";
      } else if (state.target === "parent") {
        return "_parent";
      } else if (state.target === "framename") {
        return "framename";
      } else {
        return "";
      }
    };
    const getType = () => {
      if (state.type === "info") {
        return "info";
      } else if (state.type === "danger") {
        return "danger";
      } else if (state.type === "success") {
        return "success";
      } else if (state.type === "warning") {
        return "warning";
      } else {
        return "";
      }
    };
    const setUnderline = () => {
      if (state.underline) {
        return "is-underline";
      } else {
        return "";
      }
    };
    const getDisabled = () => {
      if (state.disabled) {
        return "is-disabled";
      } else {
        return "";
      }
    };
    return {
      getDisabled,
      setUnderline,
      getType,
      getTarget,
      state,
    };
  },
});
</script>

<style scoped>
.info {
  @apply text-slate-500 hover:text-slate-600;
}
.danger {
  @apply text-red-500 hover:text-red-600;
}
.success {
  @apply text-green-500 hover:text-green-600;
}
.warning {
  @apply text-orange-500 hover:text-orange-600;
}
.is-underline {
  @apply underline;
}
.is-disabled {
  @apply cursor-not-allowed opacity-30;
}
</style>
