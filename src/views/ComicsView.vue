<script setup>
import Card from "@/components/Card.vue";
import usePost from "@/api/fetch";

const { comicData, comics } = usePost();
comicData();
</script>
<template>
  <h1>Comics</h1>
  <div class="container">
    <div class="row">
      <div
        class="col-3 mx-auto"
        v-for="destination in comics"
        :key="destination.id"
      >
        <Card
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
