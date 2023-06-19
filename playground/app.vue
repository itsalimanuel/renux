<!-- eslint-disable vue/max-attributes-per-line -->
<template>
  <div>
    <!-- body -->
  </div>
</template>

<script>
import person from "../assets/girl.png";
import bodyIcon from "../assets/boy.png";
import luz from "../assets/luz.png";
export default {
  data() {
    return {
      max: false,
      list: [
        {
          id: 1,
          icon: luz,
        },
        {
          id: 2,
          icon: bodyIcon,
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
  methods: {
    showMe() {
       Notification({
        title: 'Title'
      })
    }
  }
};
</script>
