<template>
  <div>
    <div class="v-cover group">
      <div class="play-count">
        <Icon name="material-symbols:play-arrow-outline" size="24" />
        {{ _playCount }}
      </div>
      <NuxtImg class="w-full h-full" :src="cover" :alt="name" />
      <div class="play-icon">
        <Icon
          name="material-symbols:play-arrow-rounded"
          size="30"
          color="#000"
        />
      </div>
    </div>
    <div class="space-y-1 mt-3">
      <div class="text-base font-semibold">{{ name }}</div>
      <div class="text-sm text-textBase font-light">{{ artistName }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface PropsType {
  name: string;
  artistName: string;
  cover: string;
  playCount: number;
}
const props = withDefaults(defineProps<PropsType>(), {
  cover: "",
  name: "",
  artistName: "",
  playCount: 0,
});

const _playCount = computed(() => {
  if (props.playCount < 10000) {
    return `${props.playCount}`;
  } else if (props.playCount < 100000000) {
    const newValue = Math.floor(props.playCount / 10000);
    return `${newValue} 万`;
  } else {
    const newValue = Math.floor(props.playCount / 100000000);
    return `${newValue} 亿`;
  }
});
</script>

<style scoped>
.v-cover {
  @apply relative cursor-pointer;
}
.play-count {
  @apply absolute top-2 right-3 flex items-center;
}

.play-icon {
  @apply group-hover:opacity-100  opacity-0 transition duration-300 absolute bg-accent w-[50px] h-[50px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center rounded-full;
}
</style>
