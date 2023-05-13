<script setup lang="ts">
import ChessBoard from './components/ChessBoard.vue';
import SideBar from './components/SideBar.vue';
</script>

<template>
  <div id="PageWrapper">
    <ChessBoard />
    <SideBar />
  </div>
</template>

<style scoped lang="scss">
#PageWrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  gap: 0;
  max-width: 100%;
  height: inherit;
  max-height: 100%;
}

@include respond-to(lg) {
  #PageWrapper {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
  }
}
</style>