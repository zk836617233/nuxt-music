<template>
  <section class="py-4">
    <div class="">
      <DetailHeader
        :description="detail.playlist.description"
        :name="detail.playlist.name"
        :playCount="detail.playlist.playCount"
        :trackCount="detail.playlist.trackCount"
        :updateTime="detail.playlist.updateTime"
        :coverImgUrl="detail.playlist.coverImgUrl"
        :avatarUrl="detail.playlist.creator.avatarUrl"
        :nickname="detail.playlist.creator.nickname"
        :subscribedCount="detail.playlist.subscribedCount"
        :shareCount="detail.playlist.shareCount"
      />
    </div>
    <div class="mt-4">
      <VTabs v-model="tab" bg-color="#000" color="#1ed760">
        <VTab value="one">歌曲列表</VTab>
        <VTab value="two">评论</VTab>
        <VTab value="three">收藏者</VTab>
      </VTabs>
      <v-window v-model="tab" class="mt-4">
        <v-window-item value="one">
          <v-table density="compact" class="!bg-bgBase !text-textBase">
            <thead>
              <tr>
                <th class="text-left">音乐标题</th>
                <th class="text-left">歌手</th>
                <th class="text-left">专辑</th>
                <th class="text-left">时长</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in detail.playlist.tracks" :key="item.id">
                <td>
                  {{ item.name }}
                  <template v-if="item.tns">
                    (<span v-for="tn in item.tns" :key="tn">{{ tn }}</span
                    >)
                  </template>
                </td>
                <td>
                  <span v-for="(ar, arIndex) in item.ar">
                    {{ ar.name }}<code v-if="(arIndex + 1) !== item.ar.length">/</code>
                  </span>
                </td>
                <td>{{ item.al.name }}</td>
                <td>{{ item.dt }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-window-item>

        <v-window-item value="two"> Two </v-window-item>

        <v-window-item value="three"> Three </v-window-item>
      </v-window>
    </div>
  </section>
</template>

<script setup lang="ts">
const route = useRoute();
const tab = ref("one");

const { data: detail } = await useFetch(
  `http://localhost:3000/playlist/detail?id=${route.params.id}`,
  {
    pick: ["playlist", "privileges"],
  }
);
const { data: comment } = await useFetch(
  `http://localhost:3000/comment/playlist?id=${route.params.id}`,
  {
    // pick: ["playlist", "privileges"],
  }
);

console.log(comment, "?");
</script>

<style scoped></style>
