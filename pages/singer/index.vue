<template>
  <section
    class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4"
  >
    <CardSong
      v-for="item in artist.list.artists"
      :picUrl="item.img1v1Url"
      :name="item.name"
      :key="item.id"
    />
  </section>
</template>

<script setup lang="ts">
const { data: artist } = await useFetch(
  "http://localhost:3000/toplist/artist",
  {
    pick: ["list"],
  }
);
console.log(artist);
</script>

<style scoped></style>
