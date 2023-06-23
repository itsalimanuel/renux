<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="cascader relative" ref="cascaderRef">
    <div class="selected-values" @click="toggleDropdown">
      <template v-if="selectedValues.length === 0">
        <span class="placeholder">{{ placeholder }}</span>
      </template>
      <template v-else>
        <span
          v-for="(value, index) in selectedValues.slice().reverse()"
          :key="index"
          class="value"
        >
          {{ value }}
          <span v-if="index !== selectedValues.length - 1" class="separator"
            >/</span
          >
        </span>
      </template>
      <i class="el-icon-arrow-down" />
    </div>
    <ul v-show="isDropdownOpen" class="menu">
      <li
        v-for="(option, index) in options"
        :key="index"
        @click="selectItem(option)"
      >
        {{ option.label }}
        <i v-if="option.children" class="el-icon-arrow-right" />
        <ul v-if="option.children" class="nested-menu">
          <li
            v-for="(childOption, childIndex) in option.children"
            :key="childIndex"
            @click="selectItem(childOption)"
          >
            {{ childOption.label }}
            <i v-if="childOption.children" class="el-icon-arrow-right" />
            <ul v-if="childOption.children" class="nested-menu">
              <li
                v-for="(
                  grandchildOption, grandchildIndex
                ) in childOption.children"
                :key="grandchildIndex"
                @click="selectItem(grandchildOption)"
              >
                {{ grandchildOption.label }}
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  computed,
  watch,
  onBeforeUnmount,
  onMounted,
} from "vue";

interface Option {
  value: string;
  label: string;
  children?: Option[];
}

export default defineComponent({
  props: {
    options: {
      type: Array as () => Option[],
      required: true,
    },
    placeholder: {
      type: String,
      default: "Select",
    },
    onchange: {
      type: Function,
      default: null,
    },
  },
  setup(props, { emit }) {
    const selectedValues = ref<string[]>([]);
    const isDropdownOpen = ref(false);
    const cascaderRef = ref(null);

    watch(selectedValues, (newValues) => {
      emit("input", newValues);
      if (props.onchange && typeof props.onchange === "function") {
        props.onchange(newValues);
      }
    });

    const toggleDropdown = () => {
      isDropdownOpen.value = !isDropdownOpen.value;
    };

    const selectItem = (option: Option) => {
      if (option.children && option.children.length > 0) {
        // Open the next level menu
        isDropdownOpen.value = true;
        selectedValues.value.push(option.label);
      } else {
        // Select the final value
        selectedValues.value = [option.label]; // Replace the selected value
        isDropdownOpen.value = true;
        isDropdownOpen.value = false;
      }
    };

    const goBack = () => {
      selectedValues.value.pop();
    };

    const handleMenuClick = (event: MouseEvent) => {
      event.stopPropagation();
    };

    const handleDocumentClick = (event: MouseEvent) => {
      if (!cascaderRef.value.contains(event.target as Node)) {
        isDropdownOpen.value = false;
      }
    };

    onMounted(() => {
      document.addEventListener("click", handleDocumentClick);
    });

    onBeforeUnmount(() => {
      document.removeEventListener("click", handleDocumentClick);
    });
    if (process.client) {
      document.addEventListener("click", handleDocumentClick);
      onBeforeUnmount(() => {
        document.removeEventListener("click", handleDocumentClick);
      });
    }

    return {
      selectedValues,
      isDropdownOpen,
      cascaderRef,
      toggleDropdown,
      selectItem,
      goBack,
      handleMenuClick,
    };
  },
});
</script>

<style scoped>
/* Add Tailwind CSS classes */
.cascader {
  display: inline-block;
  position: relative;
}

.selected-values {
  display: inline-block;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
}

.placeholder {
  color: #999;
}

.value {
  margin-right: 4px;
}

.separator {
  color: #999;
}

ul.menu {
  list-style: none;
  padding: 0;
  margin: 4px 0 0;
  position: absolute;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

ul.menu li {
  padding: 8px;
  cursor: pointer;
  white-space: nowrap;
}

ul.menu li:hover {
  background-color: #f5f5f5;
}

i.el-icon-arrow-right {
}

i.el-icon-arrow-down {
  transform: rotate(90deg);
}

ul.nested-menu {
  position: absolute;
  top: 0;
  left: 100%;
  display: none;
}

ul.menu li:hover > ul.nested-menu {
  display: block;
}
</style>
