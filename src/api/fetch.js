import { ref } from "vue";
export default function usePost() {
  const character = ref([]);
  const comics = ref([]);
  const characterData = async () => {
    await fetch(
      `https://gateway.marvel.com:443/v1/public/characters?ts=1660412526&limit=100&apikey=5bf99f434c56b7b344223d891c551e4c&hash=f6e15b1a5fdd702ce8c364d031fc2acc`
    )
      .then((res) => res.json())
      .then((chardata) => (character.value = chardata.data.results));
  };
  const comicData = async () => {
    await fetch(
      `https://gateway.marvel.com/v1/public/comics?orderBy=title&limit=100&ts=1660412526&apikey=5bf99f434c56b7b344223d891c551e4c&hash=f6e15b1a5fdd702ce8c364d031fc2acc`
    )
      .then((res) => res.json())
      .then((comicdata) => (comics.value = comicdata.data.results));
  };
  return { characterData, character, comics, comicData };
}
