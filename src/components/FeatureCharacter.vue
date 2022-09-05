<script setup>
const props = defineProps({
  title: String,
  image: String,
  alt: String,
  cname: String,
});
</script>
<template>
  <div class="card" style="max-width: 15rem">
    <div class="card-body text-dark">
      <img
        :src="image"
        :alt="alt"
        class="card-img-top img-thumbnail"
        style="aspect-ratio: 1/1"
      />
      <h6 class="card-title">{{ title }}</h6>
      <p class="card-text">{{ cname }}</p>
    </div>
  </div>
</template>
