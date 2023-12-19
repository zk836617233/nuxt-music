<template>
  <v-list lines="two">
    <v-list-item
      v-for="item in comments"
      :key="item.id"
      :title="item.user.nickname"
      :subtitle="item.content"
      :prepend-avatar="item.user.avatarUrl"
    >
      <div class="flex mt-2 gap-4 items-center">
        <div class="flex items-center gap-2">
          <Icon name="material-symbols:alarm" />{{ item.timeStr }}
        </div>
        <div class="flex items-center gap-2">
          <Icon name="ion:md-thumbs-up" />{{ item.likedCount }}
        </div>
        <div class="flex items-center gap-2" v-if="item.ipLocation.location">
          <Icon name="material-symbols:location-on" />{{
            item.ipLocation.location
          }}
        </div>
      </div>
    </v-list-item>
  </v-list>
</template>

<script setup lang="ts">
interface CommentsType {
  id: number;
  content: string;
  timeStr: string;
  likedCount: number;
  ipLocation?: any;
  user?: any;
}

interface PropsType {
  comments: CommentsType[];
}

withDefaults(defineProps<PropsType>(), {});
</script>
