<script setup lang="ts">
import { Tile } from '../models/tile.model';

const props = defineProps(['tile']);

{ props.tile as Tile };
</script>

<template>
  <div class="chessTile">{{ props.tile.coordinates.column + props.tile.coordinates.row }}</div>
</template>

<style scoped lang="scss">
.chessTile {
  width: 100px;
  height: 100px;
  color: white;
  background-color: gray;
}

@include respond-to(xl) {
  .chessTile {
    width: 75px;
    height: 75px;
  }
}

@include respond-to(md) {
  .chessTile {
    width: 50px;
    height: 50px;
  }
}
</style>