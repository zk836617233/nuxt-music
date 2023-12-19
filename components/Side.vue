<template>
  <div class="h-screen w-[230px] p-2">
    <ul class="side-ul">
      <li v-for="item in nav" :key="item.title">
        <NuxtLink
          activeClass="text-white"
          class="flex items-center gap-x-5"
          :to="item.link"
        >
          <Icon :name="item.icon" size="24" />
          {{ item.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const nav = [
  { title: "发现音乐", icon: "ph:music-note-simple-bold", link: "/" },
  { title: "歌单", icon: "streamline:music-folder-song", link: "/" },
  { title: "视频", icon: "ic:outline-personal-video", link: "/mv" },
  { title: "排行榜", icon: "icon-park-outline:ranking", link: "/rank" },
  {
    title: "歌手",
    icon: "material-symbols:account-circle-full",
    link: "/singer",
  },
  { title: "最新音乐", icon: "material-symbols:fiber-new-outline", link: "/" },
];
</script>

<style scoped>
.side-ul {
  @apply bg-bgBase text-textBase rounded p-3 text-lg font-semibold space-y-4;
}

.side-ul > li {
  @apply py-2 px-3 hover:text-white;
}
</style>
