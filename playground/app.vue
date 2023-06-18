<!-- eslint-disable vue/max-attributes-per-line -->
<template>
  <div class="">
    <Avatar size="small" :icon="person" type="circle" border class-name="mt-4" />
    <hr>
    <Avatar-group :data="list" type="circle" size="small" class-avatar="opacity-100" border show="together" max="1" />
  </div>
</template>

<script>
import person from "../assets/girl.png";
import body from "../assets/boy.png";
import luz from "../assets/luz.png";
export default {
  data() {
    return {
      max: false,
      list: [
        {
          id: 1,
          icon: person,
        },
        {
          id: 2,
          icon: body,
        },
        {
          id: 3,
          icon: luz,
        },
      ],
      person,
      googlePay:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/1024px-Google_Pay_Logo.svg.png?20221017164555",
    };
  },
};
</script>
