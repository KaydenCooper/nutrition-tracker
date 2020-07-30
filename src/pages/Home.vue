<template>
  <div class="home container-fluid">
    <div class="row justify-content-center p-2">
      <div class="col-6 p-2 text-center">
        <form>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Search Food...."
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="submit" id="button-addon2">SEARCH</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="row">
      <food-details />
    </div>
  </div>
</template>


<script>
import Food from "../components/Food";
export default {
  name: "Home",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {
    Food,
  },
};
</script>


