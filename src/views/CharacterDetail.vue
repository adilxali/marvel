<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const detail = ref([]);

const getData = async () => {
  await fetch(
    `https://gateway.marvel.com/v1/public/characters/${route.params.id}?ts=1660412526&apikey=5bf99f434c56b7b344223d891c551e4c&hash=f6e15b1a5fdd702ce8c364d031fc2acc`
  )
    .then((res) => res.json())
    .then((data) => (detail.value = data.data.results));
};
onMounted(() => {
  getData();
});
</script>
<template>
  <div class="card mb-3" v-for="item in detail" :key="item.id">
    <div class="row g-0">
      <div class="col-md-4">
        <img
          :src="`${item.thumbnail.path}.${item.thumbnail.extension}`"
          class="img-fluid rounded-start"
          alt="..."
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ item.name }}</h5>
          <p class="card-text">{{ item.description }}</p>
          <p class="card-text">
            Modified On :
            <small class="text-muted">{{ item.modified }}</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
