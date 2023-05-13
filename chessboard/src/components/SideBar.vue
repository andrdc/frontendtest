<script setup lang="ts">
import { useChessBoardStore } from '../stores/chess-board.store';

const chessBoardStore = useChessBoardStore();

{ chessBoardStore };
</script>

<template>
  <div id="SideBar">
    <h2>Coordinates Tracker</h2>
    {{ chessBoardStore.clickHistory }}
  </div>
</template>

<style scoped lang="scss">
#SideBar {
  grid-column: 3 / 3;
  grid-row: 1;
}

@include respond-to(lg) {
  #SideBar {
    grid-column: 1;
    grid-row: 3 / 3;
  }
}
</style>