<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nuxt-img
    :src="src"
    :width="width"
    :height="height"
    :alt="alt"
    :sizes="sizes"
    :loading="loading"
    :class="{'preload': preload}"
    :srcset="srcset"
    :style="imgStyle"
  />
</template>

<script lang="ts">
import { defineComponent, reactive, PropType,computed } from "vue";

interface ReImageProps {
  src: string;
  preload: boolean;
  loading: "lazy";
  sizes: string;
  width: number | null;
  height: number | null;
  densities: string;
  format: "webp" | "avif" | "jpeg" | "jpg" | "png" | "gif" | "svg" | "";
  quality: number | null;
  fit: "cover" | "contain" | "fill" | "inside" | "outside" | "";
  event?: (event: MouseEvent) => void;
}

export default defineComponent({
  props: {
    src: {
      type: String as PropType<ReImageProps["src"]>,
      default: null,
    },
    preload: {
      type: Boolean as PropType<ReImageProps["preload"]>,
      default: false,
    },
    loading: {
      type: String as PropType<ReImageProps["loading"]>,
      default: "lazy",
    },
    sizes: {
      type: String as PropType<ReImageProps["sizes"]>,
      default: "",
    },
    width: {
      type: Number as PropType<ReImageProps["width"]>,
      default: null,
    },
    height: {
      type: Number as PropType<ReImageProps["height"]>,
      default: null,
    },
    densities: {
      type: String as PropType<ReImageProps["densities"]>,
      default: "",
    },
    format: {
      type: String as PropType<ReImageProps["format"]>,
      default: "",
      validator: (value: ReImageProps["format"]) =>
        ["webp", "avif", "jpeg", "jpg", "png", "gif", "svg", ""].includes(
          value
        ),
    },
    quality: {
      type: Number as PropType<ReImageProps["quality"]>,
      default: null,
    },
    fit: {
      type: String as PropType<ReImageProps["fit"]>,
      default: "",
      validator: (value: ReImageProps["fit"]) =>
        ["cover", "contain", "fill", "inside", "outside", ""].includes(value),
    },
  },
  setup(props) {
    const state = reactive({
      fit: props.fit,
      format: props.format,
    });

    const getFit = () => {
      const { fit } = state;
      if (
        fit === "cover" ||
        fit === "contain" ||
        fit === "fill" ||
        fit === "inside" ||
        fit === "outside"
      ) {
        return fit;
      }
      return "";
    };

    const getFormat = () => {
      const { format } = state;
      if (
        ["webp", "avif", "jpeg", "jpg", "png", "gif", "svg"].includes(format)
      ) {
        return format;
      }
      return "";
    };
    const srcset = computed(() => {
    // Generate srcset value based on densities prop and getFormat()
    // You can customize this logic based on your requirements
    const densities = props.densities.split(",");
    const format = getFormat();
    return densities.map((density) => `${props.src}?density=${density}&format=${format} ${density}`).join(", ");
  });

  const imgStyle = computed(() => {
    // Generate additional image styles based on fit prop
    // You can customize this logic based on your requirements
    const fit = getFit();
    return fit ? `object-fit: ${fit};` : "";
  });


    return {
      getFormat,
      getFit,
      srcset,
      imgStyle,
      state,
    };
  },
});
</script>

<style lang="scss" scoped></style>
