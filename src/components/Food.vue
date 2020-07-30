<template>
  <div class="row justify-content-center food">
    <div v-for="food in foundFood" :key="food.nix_item_id">
      <div class="card p-3 m-2 shadow-lg text-wrap text-center">
        <img class="img-fluid" :src="food.photo.thumb" alt />
        <h4>
          <u>Brand:</u>
          <br />
          {{food.brand_name}}
        </h4>
        <p>
          <u>Item:</u>
          <br />
          {{food.brand_name_item_name}}
        </p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "food",
  data() {
    return {};
  },
  computed: {
    foundFood() {
      return this.$store.state.foundFood;
    },
  },
  methods: {},
  components: {},
};
</script>


<style scoped>
</style>