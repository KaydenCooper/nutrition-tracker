<template>
  <div class="home container-fluid">
    <div class="row justify-content-center p-2">
      <div class="col-6 p-2 text-center">
        <form @submit="findFood">
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Search Food...." v-model="query" />
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="submit" id="button-addon2">SEARCH</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class>
      <food />
    </div>
  </div>
</template>


<script>
import Food from "../components/Food";
export default {
  name: "Home",
  data() {
    return {
      query: "",
    };
  },
  computed: {},
  methods: {
    findFood() {
      this.$store.dispatch("findFood", { query: this.query });
    },
  },
  components: {
    Food,
  },
};
</script>


