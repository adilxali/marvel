<script setup>
import Navigation from "@/components/Navigation.vue";
import Footer from "./components/Footer.vue";
</script>
<template>
  <Navigation />
  <div class="container">
    <router-view />
  </div>
  <Footer />
</template>
