<template>
  <div>
    <div class="card-img group">
      <div class="play-count" v-if="playCount">
        <Icon name="material-symbols:play-arrow-outline" size="24" />
        {{ _playCount }}
      </div>
      <NuxtImg class="rounded-md w-full" :src="picUrl" :alt="name" />
      <div class="play-icon">
        <Icon
          name="material-symbols:play-arrow-rounded"
          size="30"
          color="#000"
        />
      </div>
    </div>
    <div class="card-text">
      {{ name }}
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  name: String,
  picUrl: String,
  playCount: Number,
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
.card-img {
  @apply relative cursor-pointer;
}

.play-count {
  @apply absolute top-2 right-3 flex items-center;
}

.play-icon {
  @apply group-hover:opacity-100  opacity-0 transition duration-300 absolute bg-accent w-[50px] h-[50px] right-3 bottom-3 flex justify-center items-center rounded-full;
}

.card-text {
  @apply py-2 text-base font-light cursor-pointer;
}
</style>
