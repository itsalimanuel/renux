<template>
  <div>
    Nuxt module playground!
    <alert />
    <Button
      size="small"
      type="success"
      class-name="mt-4"
      :loading="true"
      @click="alert"
    >
      Button 2
    </Button>
    <Button
      size="medium"
      type="success"
      class-name="mt-4"
      :loading="true"
      @click="alert"
    >
      Button
    </Button>
    <Button
      size="large"
      type="danger"
      class-name="mt-4"
      :loading="true"
      @click="alert"
    >
      Button
    </Button>
    <Badge value="200" max="10" type="warning">comments</Badge>
  </div>
</template>

<script>
export default {
  data() {
    return {
      max: false,
    };
  },
  methods: {
    alert() {
      alert(this.max);
    },
  },
};
</script>
