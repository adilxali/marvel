<script setup>
import { ref, onMounted, computed } from "vue";
import Card from "@/components/Card.vue";
import usePost from "@/api/fetch";

const { character, characterData, loading } = usePost();
const currentPage = ref(1);
const perPage = ref(12);
const totalPage = computed(() => {
  return Math.ceil(character.value.length / perPage.value);
});
const pageData = computed(() => {
  const start = (currentPage.value - 1) * perPage.value;
  const end = currentPage.value * perPage.value;
  return character.value.slice(start, end);
});
const nextPage = () => {
  if (currentPage.value < totalPage.value) {
    currentPage.value++;
  }
 
};
const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

onMounted(() => {
  characterData();
});
</script>
<template>
  <h1>Characters</h1>
  <div class="container-lg container-xs container-sm container-md">
    <div class="row">
      <div class="col-12 d-flex flex-wrap justify-content-center">
        <div v-if="loading" class="spinner-border h-screen m-10" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <Card
          v-for="char in pageData"
          :key="char.id"
          :path="`/character/${char.id}`"
          :image="`${char.thumbnail.path}.${char.thumbnail.extension}`"
          :alt="char.name"
          :title="char.name"
        />
      </div>
      <div class="col-6 d-flex justify-content-between mx-auto mt-3 mb-3">
        <button class="btn btn-primary me-2" @click="prevPage" v-if="currentPage > 1">
          Previous
        </button>
        <!-- //pages number -->
        <!-- <button
          class="btn btn-primary me-2"
          v-for="page in totalPage"
          :key="page"
          @click="currentPage = page"
          :class="{ 'btn-primary': currentPage === page }"
        >
          {{ page }}
        </button> -->

        <!-- page number with currentPage disable -->
        <div>
          <button
          class="btn btn-primary me-2 rounded rounded-circle"
          v-for="page in totalPage"
          :key="page"
          @click="currentPage = page"
          :disabled="currentPage === page"
        >
          {{ page }}
        </button>
        </div>
        <button
          class="btn btn-primary"
          @click="nextPage"
          v-if="currentPage > 0 && currentPage < totalPage"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>
