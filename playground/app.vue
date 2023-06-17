<template>
  <div>
    Nuxt module playground! 2
  </div>
  <Button
    type="info"
    :icon="googlePay"
    dir="ltr"
    size="small"
    class-name="mt-3 uppercase"
    @click="alert"
  >
    Click me
  </Button>

  <hr>
  <Avatar
    size="large"
    type="rounded"
    :border="true"
    :icon="icon"
    class-name="object-cover"
    name="Ali"
  />
</template>

<script>

export default {
  data() {
    return {
      max: false,
      icon : 'https://em-content.zobj.net/thumbs/240/openmoji/338/apple-logo_f8ff.png',
      applePay: '',
      googlePay: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/1024px-Google_Pay_Logo.svg.png?20221017164555'
    };
  },
  methods: {
    alert() {
      alert(`this.max`);
    },
  },
};
</script>
