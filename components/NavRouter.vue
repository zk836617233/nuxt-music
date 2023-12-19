<template>
  <div class="flex gap-x-4 px-4">
    <button :disabled="isBackDisabled" @click="routerHandle(-1)">
      <Icon class="m-icon" name="material-symbols:arrow-left-alt" size="28" />
    </button>
    <button :disabled="isForwardDisabled" @click="routerHandle(1)">
      <Icon class="m-icon" name="material-symbols:arrow-right-alt" size="28" />
    </button>
  </div>
</template>

<script setup>
const router = useRouter();
const route = useRoute();

const currentPath = ref("");

watch(
  () => route.path,
  async (newPath) => {
    console.log(newPath, "currentPath");
    currentPath.value = newPath;
  }
);

const isForwardDisabled = computed(() => {
  const lastRoutePath =
    router.options.routes[router.options.routes.length - 1].path;
  return currentPath.value === lastRoutePath;
});

// 计算属性，用于判断是否禁用后退按钮
const isBackDisabled = computed(() => {
  const firstRoutePath = router.options.routes[0].path;
  return currentPath.value === firstRoutePath;
});

const routerHandle = (num) => {
  router.go(num);
};
</script>

<style scoped>
.m-icon {
  @apply hover:opacity-70 cursor-pointer;
}
</style>
