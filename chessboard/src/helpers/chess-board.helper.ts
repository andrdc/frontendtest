import { Tile } from '../models/tile.model';

type GetChessBoardTiles = () => Array<Array<Tile>>;

const getChessBoardTiles: GetChessBoardTiles = function () {
  const tiles: Array<Array<Tile>> = [];
  const maxLength: number = 8;
  let charCode: number = 72;

  for (let row = 0; row < maxLength; row++) {
    tiles.push([]);
    for (let column = 0; column < maxLength; column++) {
      tiles[row].push({
        coordinates: { row: String.fromCharCode(charCode), column: (column + 1).toString() },
        click: false
      });
    }
    charCode--;
  }

  return tiles;
}

export { getChessBoardTiles };