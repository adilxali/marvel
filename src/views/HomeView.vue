<script setup>
import Card from "@/components/Card.vue";
import FeatureCharacter from "@/components/FeatureCharacter.vue";
import { FeatureCharacters, CharacterSpotlight } from "@/api/OtherCharacter";
import usePost from "@/api/fetch";
const { character, characterData } = usePost();
characterData();
</script>
<template>
  <div class="container-fluid">
    <div class="row">
      <h1>Feature Characters</h1>
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start overflow-auto">
        <div
          class="col-lg-3 col-md-3 col-sm-3 col-sx-3"
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
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start overflow-auto">
        <div
          class="col-lg-3 col-md-3 col-sm-3 col-sx-3"
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
