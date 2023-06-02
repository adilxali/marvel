<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import Back from "@/components/Back.vue";
const route = useRoute();
const loading = ref(false);

const detail = ref([]);

const getData = async () => {
  loading.value = true;
  await fetch(
    `https://gateway.marvel.com/v1/public/comics/${route.params.id}?&ts=1660412526&apikey=5bf99f434c56b7b344223d891c551e4c&hash=f6e15b1a5fdd702ce8c364d031fc2acc`
  )
    .then((res) => res.json())
    .then((data) => (detail.value = data.data.results, loading.value = false));
};
onMounted(() => {
  getData();
});
</script>
<template>
  <Back/>
  <div v-if="loading" class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
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
          <h5 class="card-title">{{ item.title }}</h5>
          <p class="card-text">{{ item.description }}</p>
          <p class="card-text">
            ISBN: <small>{{ item.isbn }}</small>
          </p>
          <p class="card-text">
            Price: <small>{{ item.prices.price }}</small>
          </p>
          <p class="card-text">
            Modified On :
            <small class="text-muted">{{ item.modified }}</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
