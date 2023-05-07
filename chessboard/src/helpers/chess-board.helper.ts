import { Tile } from '../models/tile.model';

type GetChessBoardTiles = () => Array<Array<Tile>>;

const MAX_LENGTH: number = 8;

const getChessBoardTiles: GetChessBoardTiles = function () {
  const tiles: Array<Array<Tile>> = [];

  for (let row = 0; row < MAX_LENGTH; row++) {
    tiles.push([]);
    for (let column = 0; column < MAX_LENGTH; column++) {
      tiles[row].push({
        coordinates: { row: row.toString(), column: column.toString() },
        click: false
      });
    }
  }

  return tiles;
}

export { getChessBoardTiles };