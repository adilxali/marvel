<script setup>
import Card from "@/components/Card.vue";
import usePost from "@/api/fetch";

const { character, characterData } = usePost();
characterData();
</script>
<template>
  <h1>Characters</h1>
  <div class="container">
    <div class="row">
      <div
        class="col-3 mx-auto"
        v-for="destination in character"
        :key="destination.id"
      >
        <Card
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
