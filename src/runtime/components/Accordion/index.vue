<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="accordion">
    <div @click="toggleAccordion" class="header">
      {{ state.title }}
      <span>
        <svg
          v-if="state.open"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </span>
    </div>
    <div :class="state.open ? 'isOpen' : 'isClose'" class="body">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from "vue";

interface AccordionProps {
  title?: string;
}

export default defineComponent({
  props: {
    title: {
      type: String as PropType<AccordionProps["title"]>,
      default: "",
    },
  },
  setup(props) {
    const state = reactive({
      title: props.title,
      open: false,
    });

    const toggleAccordion = () => {
      state.open = !state.open;
    };

    return {
      state,
      toggleAccordion,
    };
  },
});
</script>

<style scoped>
.accordion {
  @apply flex flex-col gap-1 p-3  border-b border-stone-400 border-solid;
}

.header {
  @apply flex items-center justify-between cursor-pointer;
}

.icon {
  @apply w-5 h-5;
}

.isOpen {
  @apply h-auto transition-all ease-in duration-300;
}

.isClose {
  @apply h-0 hidden transition-all ease-out duration-300;
}

.body {
  @apply p-2;
}
</style>
