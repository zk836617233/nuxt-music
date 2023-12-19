<template>
  <header class="m-header">
    <nav-router />
    <form>
      <input id="menu-search" class="m-input" placeholder="搜索" />
    </form>
    <v-menu activator="#menu-search" location="bottom">
      <v-list>
        <v-list-item v-for="item in data" :key="item.id">
          <v-list-item-title>{{ item.searchWord }}({{ item.score }})</v-list-item-title>
          <v-list-item-subtitle>{{ item.content }}</v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </v-menu>
  </header>
</template>

<script setup>
const { data } = await useRequestApi({
  url: "search/hot/detail",
});
</script>

<style scoped>
.m-header {
  @apply h-[64px] flex items-center;
}

.m-input {
  @apply w-[365px] h-[48px] bg-bgBase rounded-full px-6;
}
</style>
