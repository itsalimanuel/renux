<!-- eslint-disable vue/max-attributes-per-line -->
<template>
  <div>
    <!-- <Avatar :icon="person" /> -->
    <!-- data -->
  </div>
</template>

<script>
import person from "../assets/girl.png";
import bodyIcon from "../assets/boy.png";
import luz from "../assets/luz.png";
export default {
  data() {
    return {
      searchKey: '',
      max: false,
      list: [
        {
          id: 1,
          name: 'luz',
        },
        {
          id: 2,
          name: 'ali',
        },
        {
          id: 3,
          name: 'alejo',
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
