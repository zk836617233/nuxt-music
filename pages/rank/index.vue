<template>
  <section
    class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4"
  >
    <CardSong
      v-for="item in toplist.list"
      :playCount="item.playCount"
      :picUrl="item.coverImgUrl"
      :name="item.name"
      :key="item.id"
      @click="handlePath(item.id)"
    />
  </section>
</template>

<script setup lang="ts">
const router = useRouter();
const { data: toplist } = await useFetch("http://localhost:3000/toplist", {
  pick: ["list"],
});

const handlePath = (id: Number) => {
  if (!id) return;
  router.push(`/rank/${id}`);
};
</script>

<style scoped></style>
