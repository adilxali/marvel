<script setup>
import { ref, onMounted, watchEffect } from "vue";

const news = ref([]);

const getData = async () => {
  await fetch(
    `https://gateway.marvel.com:443/v1/public/characters?ts=1660412526&limit=100&apikey=5bf99f434c56b7b344223d891c551e4c&hash=f6e15b1a5fdd702ce8c364d031fc2acc`
  )
    .then((res) => res.json())
    .then((data) => (news.value = data.data.results));
};
onMounted(() => {
  getData();
});
watchEffect(() => {
  console.log(news.value);
});
</script>
<template>
  <div class="home">
    <h1>All Characters</h1>
    <div class="">
      <router-link
        v-for="destination in news"
        :key="destination.id"
        :to="{
          name: 'destination.show',
          params: { slug: destination.id },
        }"
      >
        <h1>{{ destination.name }}</h1>
        <img
          :src="`${destination.thumbnail.path}.${destination.thumbnail.extension}`"
          :alt="destination.name"
        />
        <p>{{ destination.description }}</p>
      </router-link>
    </div>
  </div>
</template>
