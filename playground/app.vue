<!-- eslint-disable vue/max-attributes-per-line -->
<template>
  <div class="max-w-xl mx-auto my-16">
    <div>
      <h1>Select Locations</h1>
      <Cascader
        :options="locations"
        placeholder="Select Location"
        v-model="selectedLocations"
      />
      <p>Selected Locations: {{ selectedLocations }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icon: "../assets/luz.png",
      name: "",
      locations: [
        {
          value: "1",
          label: "North America",
          children: [
            {
              value: "1-1",
              label: "United States",
              children: [
                {
                  value: "1-1-1",
                  label: "New York",
                },
                {
                  value: "1-1-2",
                  label: "California",
                },
              ],
            },
            {
              value: "1-2",
              label: "Canada",
              children: [
                {
                  value: "1-2-1",
                  label: "Toronto",
                },
                {
                  value: "1-2-2",
                  label: "Vancouver",
                },
              ],
            },
          ],
        },
        {
          value: "2",
          label: "Europe",
          children: [
            {
              value: "2-1",
              label: "United Kingdom",
              children: [
                {
                  value: "2-1-1",
                  label: "London",
                },
                {
                  value: "2-1-2",
                  label: "Manchester",
                },
              ],
            },
            {
              value: "2-2",
              label: "France",
              children: [
                {
                  value: "2-2-1",
                  label: "Paris",
                },
                {
                  value: "2-2-2",
                  label: "Marseille",
                },
              ],
            },
          ],
        },
      ],
      selectedLocations: [],
    };
  },
};
</script>
