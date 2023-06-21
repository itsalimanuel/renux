<!-- eslint-disable vue/max-attributes-per-line -->
<template>
  <div>
    <!-- <Avatar :icon="person" /> -->
    <!-- data -->
    <Input
      label="Name"
      html-for="name"
      :required="true"
      placeholder="number"
      :change="searchKey"

      type="text"
      flex="col"
    />
    <input type="text" v-model="searchKey">
   search: {{ searchKey }}
  </div>
</template>

<script>

export default {
  data() {
    return {
      searchKey: ''
    }
  }
}

</script>
