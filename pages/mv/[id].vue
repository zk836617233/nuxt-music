<template>
  <section class="bg-[#212121] p-4">
    <!-- <h2>mv详情</h2> -->
    <div id="m-video"></div>
    <div class="flex gap-4 items-center mt-4">
      <NuxtImg
        class="w-[50px] h-[50px] rounded-full"
        :src="detail.data.cover"
      />
      <div>{{ detail.data.artistName }}</div>
    </div>
    <h3 class="text-textBase text-xl font-bold mt-2">{{ detail.data.name }}</h3>
    <div class="flex gap-4 mt-4">
      <div>发布：{{ detail.data.publishTime }}</div>
      <div>播放：{{ detail.data.playCount }}</div>
    </div>
    <v-chip-group v-if="detail.data.videoGroup.length !== 0">
      <v-chip v-for="item in detail.data.videoGroup" :key="item.id">{{
        item.name
      }}</v-chip>
    </v-chip-group>
    <div class="flex gap-4 mt-4">
      <VBtn color="#1ed760" size="small" prepend-icon="mdi-thumb-up-outline">
        赞({{ info.likedCount }})
      </VBtn>
      <VBtn
        color="#b3b3b3"
        size="small"
        variant="outlined"
        prepend-icon="mdi-tab-plus"
      >
        收藏({{ detail.data.subCount }})
      </VBtn>
      <VBtn
        color="#b3b3b3"
        size="small"
        variant="outlined"
        prepend-icon="mdi-share-all-outline"
      >
        分享({{ detail.data.shareCount }})
      </VBtn>
    </div>
    <div class="my-4">共{{ comment.total }}条评论</div>
    <template v-if="comment.hotComments.length !== 0">
      <div>热门评论</div>
      <CommentList :comments="comment.hotComments" />
    </template>
    <div>最新评论</div>
    <CommentList :comments="comment.comments" />
  </section>
</template>

<script setup>
import Player from "xgplayer";
import "xgplayer/dist/index.min.css";
const route = useRoute();
console.log(route.params.id);
// mv视频url
const { data: urls } = await useFetch(
  `http://localhost:3000/mv/url?id=${route.params.id}`,
  {
    pick: ["data"],
  }
);
// mv详情
const { data: detail } = await useFetch(
  `http://localhost:3000/mv/detail?mvid=${route.params.id}`,
  {
    pick: ["data"],
  }
);
// mv评论list
const { data: comment } = await useFetch(
  `http://localhost:3000/comment/mv?id=${route.params.id}`,
  {
    pick: ["total", "comments", "hotComments"],
  }
);
// mv点赞分享
const { data: info } = await useFetch(
  `http://localhost:3000/mv/detail/info?mvid=${route.params.id}`,
  {
    pick: ["likedCount"],
  }
);
console.log(info);

onMounted(() => {
  new Player({
    id: "m-video",
    url: urls.value.data.url,
    height: "500px",
    width: "780px",
  });
});
</script>

<style scoped></style>
