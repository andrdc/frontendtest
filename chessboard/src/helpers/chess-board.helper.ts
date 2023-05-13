import { Tile } from '../models/tile.model';

type GetChessBoardTiles = () => Array<Array<Tile>>;

const getChessBoardTiles: GetChessBoardTiles = function () {
  const tiles: Array<Array<Tile>> = [];
  const maxLength: number = 8;
  const charCode: number = 65;

  for (let row = 0; row < maxLength; row++) {
    tiles.push([]);
    for (let column = 0; column < maxLength; column++) {
      tiles[row].push({
        coordinates: { row: (maxLength - row).toString(), column: String.fromCharCode(charCode + column) },
        click: false
      });
    }
  }

  return tiles;
}

export { getChessBoardTiles };