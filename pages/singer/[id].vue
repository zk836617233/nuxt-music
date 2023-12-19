<template>
  <section>
    <DetailSinger
      :name="detail.artist.name"
      :avatar="detail.artist.avatar"
      :alias="detail.artist.alias"
      :video-count="detail.videoCount"
      :music-size="detail.artist.musicSize"
      :album-size="detail.artist.albumSize"
    />
    <VTabs v-model="tab" bg-color="#000" color="#1ed760">
      <VTab value="one">专辑</VTab>
      <VTab value="two">MV</VTab>
      <VTab value="three">歌手详情</VTab>
      <VTab value="four">相似歌手</VTab>
    </VTabs>
    <v-window v-model="tab" class="mt-4">
      <v-window-item value="one">专辑 </v-window-item>
      <v-window-item value="two">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <CardVideo
            v-for="item in mvs"
            :key="item.id"
            :cover="item.imgurl"
            :name="item.name"
            :artist-name="item.artistName"
            :play-count="item.playCount"
            @click="routeHendle(item.id)"
          />
        </div>
      </v-window-item>
      <v-window-item value="three">
        <v-list lines="three">
          <v-list-item
            v-if="desc.introduction.length !== 0"
            v-for="item in desc.introduction"
            :key="item.ti"
            :title="item.ti"
          >
            <p style="white-space: pre-wrap" class="leading-10 text-textBase">
              {{ item.txt }}
            </p>
          </v-list-item>
          <v-list-item v-else>
            <p style="white-space: pre-wrap" class="leading-10 text-textBase">
              {{ desc.briefDesc }}
            </p></v-list-item
          >
        </v-list>
      </v-window-item>
      <v-window-item value="four">相似歌手 </v-window-item>
    </v-window>
  </section>
</template>

<script setup>
const route = useRoute();
const router = useRouter();
const tab = ref("one");
const { data: detail } = await useRequestApi({
  url: `artist/detail?id=${route.params.id}`,
});

const desc = await useRequestApi({
  url: `/artist/desc?id=${route.params.id}`,
});
console.log(desc, "desc");

// 歌手mv
const { mvs } = await useRequestApi({
  url: `/artist/mv?id=${route.params.id}`,
});

// 相似歌手
const simi = await useRequestApi({
  url: `/simi/playlist?id=${route.params.id}`,
});

const routeHendle = (id) => {
  const router = useRouter();
  router.push(`/mv/${id}`);
};
</script>

<style scoped></style>
