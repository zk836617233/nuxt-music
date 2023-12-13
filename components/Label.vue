<template>
  <NuxtLink class="text-2xl font-bold text-textBase hover:text-white" :to="to">
    <slot />
    <Icon name="material-symbols:chevron-right" size="26" />
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
  to: String,
});
</script>
