<template>
  <section>
    <div class="flex flex-col gap-4">
      <v-btn-toggle
        v-model="optionsType.area"
        rounded="0"
        color="#1ed760"
        group
        @update:modelValue="(e) => changeValue(e, 'area')"
      >
        <v-btn value="全部"> 全部 </v-btn>
        <v-btn value="内地"> 内地 </v-btn>
        <v-btn value="港台"> 港台 </v-btn>
        <v-btn value="欧美"> 欧美 </v-btn>
        <v-btn value="韩国"> 韩国 </v-btn>
        <v-btn value="日本"> 日本 </v-btn>
      </v-btn-toggle>
      <v-btn-toggle
        v-model="optionsType.order"
        rounded="0"
        color="#1ed760"
        group
      >
        <v-btn value="全部"> 全部 </v-btn>
        <v-btn value="官方版"> 官方版 </v-btn>
        <v-btn value="原声"> 原声 </v-btn>
        <v-btn value="现场版"> 现场版 </v-btn>
        <v-btn value="网易出品"> 网易出品 </v-btn>
      </v-btn-toggle>
      <v-btn-toggle
        v-model="optionsType.type"
        rounded="0"
        color="#1ed760"
        group
      >
        <v-btn value=""> 上升最快 </v-btn>
        <v-btn value="最热"> 最热 </v-btn>
        <v-btn value="最新"> 最新 </v-btn>
      </v-btn-toggle>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      <CardVideo
        v-for="item in video.data"
        :key="item.id"
        :cover="item.cover"
        :name="item.name"
        :artist-name="item.artistName"
        :play-count="item.playCount"
        @click="routeHendle(item.id)"
      />
    </div>
  </section>
</template>

<script setup>
const optionsType = reactive({
  area: "全部",
  order: "全部",
  type: "",
});

const { data: video } = await useFetch(
  "http://localhost:3000/mv/all",
  {
    pick: ["data"],
  }
);
const routeHendle = (id) => {
  const router = useRouter();
  router.push(`/mv/${id}`);
};

const changeValue = (e, key) => {
  if (e === undefined) optionsType[key] = "";
  console.log(`http://localhost:3000/mv/all?area=${optionsType.area}&order=${optionsType.order}&type=${optionsType.type}`);
  changeData();
};

const changeData = async () => {
  // const { data: videos } = await useFetch(
  //   `http://localhost:3000/mv/all?area=${optionsType.area}&order=${optionsType.order}&type=${optionsType.type}`,
  //   {
  //     pick: ["data"],
  //   }
  // );
  const { data: videos } = await useFetch(
    "http://localhost:3000/mv/all",
    {
      query: {
        area: optionsType.area,
        order: optionsType.order,
        type: optionsType.type,
      },
    },
    {
      pick: ["data"],
    }
  );

  console.log(videos);
  video.value.data = videos.value.data;
};
</script>

<style scoped></style>
