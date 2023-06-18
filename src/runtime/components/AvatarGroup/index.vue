<template>
  <div
    class="avatar-group items-center"
    :class="showClass()"
  >
    <div
      v-for="(item, index) in displayedSlot"
      :key="index"
      class="avatar-child"
    >
      <Avatar
        :size="state.size"
        :type="state.type"
        :icon="item?.icon"
        :border="state.border"
        :color="state.color"
        :class-name="classAvatar"
        :name="item?.name"
      />
    </div>
    <Avatar
      v-if="remainingCount"
      :size="state.size"
      :type="state.type"
      :border="state.border"
      :color="state.color"
      :class-name="classAvatar"
      :name="remainingCount.toString()"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, PropType, VNode } from "vue";

interface AvatarGroupProps {
  show?: "normal" | "together";
  data?: Array<any> | undefined;
  max?: number;
}

interface AvatarProps {
  size?: "small" | "medium" | "large";
  border?: boolean;
  color?: string;
  icon?: string;
  type?: "square" | "circle" | "rounded";
  classAvatar?: string;
  name?: string;
}

export default defineComponent({
  name: "AvatarGroup",
  props: {
    show: {
      type: String as PropType<AvatarGroupProps["show"]>,
      default: "together",
      validator: (value: string) => ["normal", "together"].includes(value),
    },
    max: {
      type: Number as PropType<AvatarGroupProps["max"]>,
      default: null,
    },
    data: {
      type: Array as PropType<AvatarGroupProps["data"]>,
      default: undefined,
    },
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
    classAvatar: {
      type: String as PropType<AvatarProps["classAvatar"]>,
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
      show: props.show,
      max: props.max,
      color: props.color,
      size: props.size,
      type: props.type,
      border: props.border,
      name: props.name,
      icon: props.icon,
      data: props.data,
    });

    let displayedSlot: Array<VNode | null> = [];
    let remainingCount = 0;

    if (state.max && state.data && state.data.length > state.max) {
      displayedSlot = state.data.slice(0, state.max);
      remainingCount = state.data.length - state.max;
    } else {
      displayedSlot = state.data;
    }

    const showClass = () => {
      if (state.show === "normal") {
        return "group-normal";
      } else if (state.show === "together") {
        return "group-together";
      } else {
        return "group-default";
      }
    };

    return {
      state,
      displayedSlot,
      remainingCount,
      showClass,
    };
  },
});
</script>

<style>
.avatar-group {
  display: flex;
  width: fit-content;
  align-items: center;
}

.group-normal div:nth-child(n + 2) {
  margin-left: 8px;
}
.group-together div:nth-child(n + 2) {
  margin-left: -10px;
  z-index: 2;
}
</style>
