<template>
  <div id="app">
    <div class="container-fluid" id="nav">
      <div class="row bg-secondary text-light justify-content-center">
        <div class="col-6 p-2 text-center">
          <h1>NUTRITION TRACKER</h1>
        </div>
        <div class="col-6 p-2 text-center">
          <router-link class="text-light" to="/">
            <b>Home</b>
          </router-link>
          <router-link class="text-light" to>
            <b>Food</b>
          </router-link>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>


<script>
