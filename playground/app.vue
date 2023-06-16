<template>
  <div>
    Nuxt module playground!
    <alert />
    <Button class-name="mt-4 mx-2" @click="alert"> Button </Button>
    <Button type="info" class-name="mt-4 mx-2" @click="alert"> Button </Button>
    <Button size="medium" type="success" class-name="mt-4 mx-2">
      Button
    </Button>
    <Button size="medium" type="warning" class-name="mt-4 mx-2">
      Button
    </Button>
    <Button size="medium" type="danger" class-name="mt-4 mx-2"> Button </Button>
    <div class="flex items-center gap-2">
      <Button type="info" size="small" class-name="mt-4 mx-2" @click="alert">
        Button
      </Button>
      <Button class-name="mt-4 mx-2" @click="alert"> Button </Button>
      <Button size="medium" type="success" class-name="mt-4 mx-2">
        Button
      </Button>
      <Button size="large" type="warning" class-name="mt-4 mx-2">
        Button
      </Button>
      <Button size="medium" type="danger" class-name="mt-4 mx-2">
        Button
      </Button>
    </div>
    <div class="flex items-center gap-2">
      <Button :loading="true" type="info" size="small" class-name="mt-4 mx-2" @click="alert">
        Button
      </Button>
      <Button :loading="true" class-name="mt-4 mx-2" @click="alert"> Button </Button>
      <Button :loading="true" size="medium" type="success" class-name="mt-4 mx-2">
        Button
      </Button>
      <Button :loading="true" size="large" type="warning" class-name="mt-4 mx-2">
        Button
      </Button>
      <Button :loading="true" size="medium" type="danger" class-name="mt-4 mx-2">
        Button
      </Button>
    </div>
    <div class="flex items-center">
      <Button disabled :icon="icon" class-name="mt-4 mx-2" @click="alert"> Button </Button>
      <Button icon-is="right" :icon="googlePay" class-name="mt-4 mx-2" @click="alert"> Pay with google </Button>
    </div>
  </div>
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
