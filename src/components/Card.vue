<script setup>
defineProps({
  title: String,
  image: String,
  path: String,
  alt: String,
});
</script>
<template>
  <div class="card" style="width: 18rem">
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
</template>
