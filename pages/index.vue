<template>
  <section class="bg-bgBase p-4">
    <Swiper
      :modules="[
        SwiperAutoplay,
        SwiperEffectCards,
        SwiperController,
        SwiperPagination,
        SwiperNavigation,
      ]"
      navigation
      :pagination="{ clickable: true }"
      :controller="true"
      :slides-per-view="1"
      :loop="true"
      :effect="'cards'"
      :autoplay="{
        delay: 2000,
        disableOnInteraction: true,
      }"
    >
      <SwiperSlide v-for="(item, idx) in banner.banners" :key="item.id">
        <NuxtImg :src="item.imageUrl" class="h-full rounded" />
      </SwiperSlide>
    </Swiper>
    <div class="mt-6">
      <Label>推荐歌单</Label>
      <div class="grid grid-cols-5 gap-4 mt-4">
        <CardSong
          v-for="item in personalized.result"
          :picUrl="item.picUrl"
          :playCount="item.playCount"
          :name="item.name"
          :key="item.id"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const { data: banner } = await useFetch("http://localhost:3000/banner", {
  pick: ["banners"],
});

const { data: personalized } = await useFetch(
  "http://localhost:3000/personalized?limit=10",
  {
    pick: ["result"],
  }
);
console.log(personalized);
</script>

<style scoped>
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 290px;
  /* font-size: 4rem; */
  font-weight: bold;
}
.swiper-wrapper {
  min-width: 100vh;
  width: 100vh;
}
.swiper-cards {
  width: 100%;
  /* height:100%; */
  height: 290px;
}
.swiper-cards .swiper-slide {
  height: 290px;
  border-radius: 6px;
  /* border: 1px solid black; */
}
.swiper {
  --swiper-theme-color: #1ed760; /* 设置Swiper风格 */
  --swiper-navigation-color: #1ed760; /* 单独设置按钮颜色 */
  --swiper-navigation-size: 30px; /* 设置按钮大小 */
}
/* .swiper-container {
  position: relative;
  width: 100%;
  height: 500px;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 300ms;
  transform: scale(0.8);
}
.swiper-slide-active,
.swiper-slide-duplicate-active {
  transform: scale(1);
} */
</style>
