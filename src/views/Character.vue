<script setup>
import Card from "@/components/Card.vue";
import usePost from "@/api/fetch";

const { character, characterData } = usePost();
characterData();
</script>
<template>
  <h1>Characters</h1>
  <div class="container-lg container-xs container-sm container-md">
    <div class="row">
      <div class="col-12 d-flex flex-wrap justify-content-center">
        <Card
          v-for="destination in character"
          :key="destination.id"
          :path="{
            name: 'character.show',
            params: { id: destination.id },
          }"
          :image="`${destination.thumbnail.path}.${destination.thumbnail.extension}`"
          :alt="destination.name"
          :title="destination.name"
        />
      </div>
    </div>
  </div>
</template>
