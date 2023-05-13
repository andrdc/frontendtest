import { ref, Ref } from 'vue';
import { defineStore } from 'pinia';
import { chessBoard } from '../classes/chess-board';
import { Tile } from '../models/tile.model';
import { getCoordinate } from '../helpers/chess-board.helper';

export const useChessBoardStore = defineStore('chessBoard', () => {
  const tiles: Ref<Array<Array<Tile>>> = ref(chessBoard.tiles);
  const clickTracker: Ref<Array<String>> = ref(chessBoard.clickTracker);

  function clickTile(tile: Tile): void {
    if (!tile.click) {
      tile.click = true;
      clickTracker.value.push(getCoordinate(tile));
    }
  }

  return { tiles, clickTracker, clickTile };
});