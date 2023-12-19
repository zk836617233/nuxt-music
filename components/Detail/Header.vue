<template>
  <div class="flex gap-x-4">
    <div class="cover">
      <NuxtImg class="rounded-lg" :src="coverImgUrl" :alt="name" />
    </div>
    <div class="flex flex-col gap-y-4">
      <!-- 标题 -->
      <h3 class="text-2xl font-bold">{{ name }}</h3>
      <!-- 用户 -->
      <div class="flex items-center gap-4">
        <div class="flex items-center gap-2 text-textBase">
          <NuxtImg
            class="w-[30px] h-[30px] rounded-full"
            :src="avatarUrl"
            :alt="nickname"
          />
          {{ nickname }}
        </div>
        <div class="text-textBase">最近更新：{{ updateTime }}</div>
      </div>
      <!-- btn组 -->
      <div class="flex gap-4">
        <VBtn color="#1ed760" size="small" prepend-icon="mdi-play">
          播放全部
        </VBtn>
        <VBtn
          color="#b3b3b3"
          size="small"
          variant="outlined"
          prepend-icon="mdi-tab-plus"
        >
          收藏{{ subscribedCount }}
        </VBtn>
        <VBtn
          color="#b3b3b3"
          size="small"
          variant="outlined"
          prepend-icon="mdi-share-all-outline"
        >
          分享{{ shareCount }}
        </VBtn>
      </div>
      <div class="flex gap-4 text-sm">
        <div>
          歌曲数量：<span class="text-subtitle text-sm">{{ trackCount }}</span>
        </div>
        <div>
          播放数量：<span class="text-subtitle text-sm">{{ playCount }}</span>
        </div>
      </div>
      <!-- 简介 -->
      <p class="text-sm">
        简介：<span class="text-subtitle text-sm">{{ description }}</span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface PropsType {
  description: string;
  name: string;
  playCount: number;
  trackCount: number;
  updateTime: number;
  coverImgUrl: string;
  avatarUrl: string;
  nickname: string;
  shareCount: number;
  subscribedCount: number;
}
defineProps<PropsType>();
</script>

<style scoped>
.cover {
  @apply w-[250px] h-[250px];
}
</style>
