<script setup lang="ts">
</script>

<template>
  <div id="ChessBoard">ChessBoard</div>
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