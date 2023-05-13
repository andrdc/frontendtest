<script setup lang="ts">
import { ref, computed } from 'vue';
import { getBackground } from '../helpers/chess-tile.helper';
import { useChessBoardStore } from '../stores/chess-board.store';
import { Tile } from '../models/tile.model';

const props = defineProps(['tile']);
const chessBoardStore = useChessBoardStore();
const clickTile = chessBoardStore.clickTile;
const background = ref([false, false]);

background.value = getBackground(props.tile.coordinates.row as number, (props.tile.coordinates.column as String).charCodeAt(0));

const classObject = computed(() => ({
  clicked: props.tile.click,
  green: background.value[0],
  whiteish: background.value[1]
}));

{ props.tile as Tile, clickTile, classObject };
</script>

<template>
  <div class="chessTile" :class="classObject" @click="clickTile(props.tile)">
    {{ props.tile.coordinates.column + props.tile.coordinates.row }}
  </div>
</template>

<style scoped lang="scss">
.chessTile {
  width: 100px;
  height: 100px;
  color: #363636;
  cursor: pointer;
}

.green {
  background-color: #769656;
}

.whiteish {
  background-color: #eeeed2;
}

.clicked {
  transition-property: background-color;
  transition-duration: .5s;
  background-color: rgb(235, 97, 80);
  opacity: 0.8;
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