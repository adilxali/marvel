<script setup>
import { onMounted } from "vue";
import Card from "@/components/Card.vue";
import usePost from "@/api/fetch";

const { comicData, comics, loading } = usePost();
onMounted(() => {
  comicData();
});
</script>
<template>
  <h1>Comics</h1>
  <div class="container container-sm container-lg">
    <div class="row">
      <div class="col-12 d-flex flex-wrap justify-content-center mt-3 mb-3">
        <div v-if="loading" class="spinner-border " role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <Card
          v-for="destination in comics"
          :key="destination.id"
          :path="{
            name: 'comics.show',
            params: { id: destination.id },
          }"
          :image="`${destination.thumbnail.path}.${destination.thumbnail.extension}`"
          :alt="destination.name"
          :title="destination.title"
        />
      </div>
    </div>
  </div>
</template>
