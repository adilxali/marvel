<script setup>
import { ref, onMounted, computed } from "vue";
import Card from "@/components/Card.vue";
import FeatureCharacter from "@/components/FeatureCharacter.vue";
import { FeatureCharacters, CharacterSpotlight } from "@/api/OtherCharacter";
import usePost from "@/api/fetch";
const { character, characterData, loading } = usePost();


const paginateData = computed(() => {
  const start = 0;
  const end = 16;
  return character.value.slice(start, end);
});

onMounted(() => {
  characterData();
});
</script>
<template>
  <div class="container-fluid">
    <div class="row">
      <h1>Feature Characters</h1>
      <div class="col d-flex justify-content-start overflow-auto">
        <div
          class="col-4 col-sm-3 mb-3"
          v-for="character in FeatureCharacters"
          :key="character.id"
        >
          <FeatureCharacter
            :image="character.image"
            :alt="character.cname"
            :title="character.name"
            :cname="character.cname"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="row">
      <h1>Spotlight Characters</h1>
      <div class="col-12 d-flex justify-content-start overflow-auto">
        <div
          class="col-4 col-sm-3 mb-3"
          v-for="character in CharacterSpotlight"
          :key="character.id"
        >
          <FeatureCharacter
            :image="character.image"
            :alt="character.cname"
            :title="character.name"
            :cname="character.cname"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="row">
      <!-- <div class="loader" v-if="loading">
        <p class="loader__label">Loading...</p>
      </div> -->
      <div class="col-12 d-flex flex-wrap justify-content-center mb-3">
        <div v-if="loading" class="spinner-border mt-4 mb-4" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <Card
          v-for="destination in paginateData"
          :key="destination.id"
          :path="`/character/${destination.id}`"
          :image="`${destination.thumbnail.path}.${destination.thumbnail.extension}`"
          :alt="destination.name"
          :title="destination.name"
        />
      </div>
      <div>
        
          <router-link to="/character" class="mb-3 text-decoration-none float-end btn btn-outline-dark"> See More </router-link>
        
      </div>
    </div>
  </div>
</template>
<style scoped>
::-webkit-scrollbar {
  width: 0.5px;
}

::-webkit-scrollbar-track {
  background: hsl(216, 38%, 95%);
  outline: 1.5px solid #f37a7a;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  border: 5px solid hsl(216, 38%, 95%);
  background: #f53636;
  border-radius: 10px;
}
::-webkit-scrollbar-button {
  width: calc(25% - 30px);
}
.loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ccc;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loader__label {
  color: #000;
}
.btn-outline-dark .text{
  color: #000 !important;
}
.btn-outline-dark:hover{
  color: #fff !important;
}
.text:hover{
  color: #fff !important;
}
</style>
