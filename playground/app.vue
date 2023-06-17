<template>
  <div>
    Nuxt module playground!
  </div>
  <Button type="danger" class-name="mt-3">Click me</Button>
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
      alert(this.max);
    },
  },
};
</script>
