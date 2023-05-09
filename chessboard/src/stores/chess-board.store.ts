import { ref, Ref } from 'vue';
import { defineStore } from 'pinia';
import { chessBoard } from '../classes/chess-board';
import { Tile } from '../models/tile.model';

export const useChessBoardStore = defineStore('chessBoard', () => {
  const tiles: Ref<Array<Array<Tile>>> = ref(chessBoard.tiles);

  return { tiles };
});