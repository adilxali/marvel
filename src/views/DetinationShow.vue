<script setup>
import { ref, onMounted, watchEffect } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const abs = () => {
  alert(`Slug : ${route.params.slug}`);
};

const detail = ref("");

const getData = async () => {
  await fetch(
    `https://gateway.marvel.com/v1/public/characters/${route.params.slug}?ts=1660412526&apikey=5bf99f434c56b7b344223d891c551e4c&hash=f6e15b1a5fdd702ce8c364d031fc2acc`
  )
    .then((res) => res.json())
    .then((data) => (detail.value = data.data.results));
};
onMounted(() => {
  getData();
});
watchEffect(() => {
  console.log(detail.value);
});
</script>
<template>
  <section class="destination">
    <div v-if="detail">
      <button @click="abs">Hi</button>
      <h1>{{ detail.name }}</h1>
      <h1>{{ detail }}</h1>
      <p>{{ detail.description }}</p>
    </div>
    <div v-else>Please Wait...</div>
  </section>
</template>
