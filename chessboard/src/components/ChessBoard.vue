<script setup lang="ts">
import { useChessBoardStore } from '../stores/chess-board.store';

const chessBoardStore = useChessBoardStore();

{ chessBoardStore };
</script>

<template>
  <div id="ChessBoard">{{ chessBoardStore.tiles }}</div>
</template>

<style scoped lang="scss">
#ChessBoard {
  grid-column: 1 / 3;
  grid-row: 1;
}

@include respond-to(md) {
  #ChessBoard {
    grid-column: 1;
    grid-row: 1 / 3;
  }
}
</style>