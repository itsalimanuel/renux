<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <template v-if="icon">
    <img
      :src="icon"
      :class="[getSize(), getType(), getBorder(), className]"
      class="m-auto"
    >
  </template>
  <template v-else>
    <div
      :class="[getSize(), getType(),getBorder(), className]"
      class="m-auto is-name"
    >
      {{ name?.slice(0, 1) }}
    </div>
  </template>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from "vue";

interface AvatarProps {
  size?: "small" | "medium" | "large";
  border?: boolean;
  color?: string;
  icon?: string;
  type?: "square" | "circle" | "rounded";
  className?: string;
  name?: string;
}
export default defineComponent({
  props: {
    size: {
      type: String as PropType<AvatarProps["size"]>,
      default: "medium",
      validator: (value: string) =>
        ["small", "medium", "large"].includes(value),
    },
    border: {
      type: Boolean as PropType<AvatarProps["border"]>,
      default: false,
    },
    color: {
      type: String as PropType<AvatarProps["color"]>,
      default: "",
    },
    icon: {
      type: String as PropType<AvatarProps["icon"]>,
      default: null,
    },
    className: {
      type: String as PropType<AvatarProps["className"]>,
      default: "",
    },
    type: {
      type: String as PropType<AvatarProps["type"]>,
      default: "square",
      validator: (value: string) =>
        ["square", "circle", "rounded"].includes(value),
    },
    name: {
      type: String as PropType<AvatarProps["name"]>,
      default: "name",
    },
  },
  setup(props) {
    const state = reactive({
      color: props.color,
      size: props.size,
      type: props.type,
      border: props.border,
      name: props.name,
    });

    const getSize = () => {
      if (state.size == "small") {
        return "is-small";
      } else if (state.size == "medium") {
        return "is-medium";
      } else if (state.size == "large") {
        return "is-large";
      } else {
        return "is-default";
      }
    };
    const getType = () => {
      if (state.type == "square") {
        return "rounded-3xl";
      } else if (state.type == "circle") {
        return "is-circle";
      } else if (state.type == "rounded") {
        return "rounded";
      } else {
        return "rounded-none";
      }
    };
    const getBorder = () => {
      if (state.border) {
        if (props.color) {
          return `border-${props.color}-500`;
        }
        return `is-border`;
      }
    };
    return {
      getSize,
      getType,
      getBorder,
    };
  },
});
</script>

<style scoped>
/* sizes */
.is-small {
  @apply h-[35px] w-[35px];
}
.is-medium {
  @apply h-[45px] h-[45px];
}
.is-large {
  @apply h-[55px] w-[55px];
}
.is-default {
  @apply h-[40px] w-[40px];
}
.is-circle {
  @apply rounded-[50%];
}
.is-border {
  @apply border border-solid ring-2 ring-white dark:ring-black;
}
.is-name {
  @apply flex items-center justify-center text-xs uppercase bg-stone-400;
}
</style>
