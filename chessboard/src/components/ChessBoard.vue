<script setup lang="ts">
import { useChessBoardStore } from '../stores/chess-board.store';
import ChessTile from '../components/ChessTile.vue';

const chessBoardStore = useChessBoardStore();

{ chessBoardStore };
</script>

<template>
  <div id="ChessBoardWrapper">
    <span class="rowWrapper" v-for="row in chessBoardStore.tiles">
      <span v-for="tile in row">
        <ChessTile :tile="tile" />
      </span>
    </span>
  </div>
</template>

<style scoped lang="scss">
#ChessBoardWrapper {
  grid-column: 1 / 3;
  grid-row: 1;
  display: grid;
  grid-gap: 0px;
  grid-template-rows: repeat(8, 100px);
  grid-template-columns: 800px;
  margin: auto;
}

.rowWrapper {
  display: flex;
}

@include respond-to(xl) {
  #ChessBoardWrapper {
    grid-template-rows: repeat(8, 75px);
    grid-template-columns: 600px;
  }
}

@include respond-to(lg) {
  #ChessBoardWrapper {
    grid-column: 1;
    grid-row: 1 / 3;
  }
}

@include respond-to(md) {
  #ChessBoardWrapper {
    grid-template-rows: repeat(8, 50px);
    grid-template-columns: 400px;
  }
}
</style>