<template>
  <div class="flex gap-x-4">
    <div class="singer-cover">
      <NuxtImg class="rounded-md" :src="avatar" :alt="name" />
    </div>
    <div class="singer-info">
      <h3>{{ name }}</h3>
      <div class="flex gap-x-2 text-textBase">
        <div v-for="item in alias" :key="item">{{ item }}</div>
      </div>
      <div class="flex gap-2">
        <div>单曲数：{{ musicSize }}</div>
        <div>专辑数：{{ albumSize }}</div>
        <div>Mv数量：{{ videoCount }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface PropsType {
  name: string;
  avatar: string;
  alias?: string[];
  videoCount?:number;
  musicSize?:number;
  albumSize?:number;
}

defineProps<PropsType>();
</script>

<style scoped>
.singer-cover {
  @apply w-[300px] h-[300px] rounded-md;
}

.singer-info {
  @apply flex flex-col gap-4;
}
</style>
