<template>
  <section class="m-section">
    <Side class="m-side" />
    <Header class="m-header" />
    <main class="m-main">
      <slot />
    </main>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.m-section {
  @apply grid w-full h-screen overflow-hidden;
  grid-template-areas:
    "side header header"
    "side main main"
    "side main main";
  grid-template-columns: auto 1fr;
  background: #000;
  grid-template-rows: 1fr auto;
  
}
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}

.m-side {
  grid-area: side;
}

.m-header {
  grid-area: header;
}
.m-main {
  grid-area: main;
  @apply h-screen overflow-y-scroll p-2 pb-[64px];
}
</style>
