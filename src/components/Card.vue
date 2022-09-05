<script setup>
const props = defineProps({
  title: String,
  image: String,
  path: String,
  alt: String,
});
</script>
<template>
  <div class="col-lg-3 col-xs-12 col-sm-6 col-md-6 p-1">
    <div class="card p-3" style="max-width: 18rem">
      <router-link :to="path" class="text-decoration-none">
        <img
          :src="image"
          :alt="alt"
          class="card-img-top img-fluid"
          style="aspect-ratio: 1/1"
        />
        <div class="card-body text-dark">
          <h5 class="card-title">{{ title }}</h5>
        </div>
      </router-link>
    </div>
  </div>
</template>
