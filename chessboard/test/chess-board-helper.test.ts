import { getChessBoardTiles } from '../src/helpers/chess-board.helper';
import { Tile } from '../src/models/tile.model';

describe('Chess Board Tests', () => {
  const EXPECTED_LENGTH: number = 8;
  let chessBoardTiles: Array<Array<Tile>>;

  beforeAll(() => {
    chessBoardTiles = getChessBoardTiles();
  });

  test('getChessBoardTiles should return a matrix of length 8x8', () => {
    expect(chessBoardTiles.length).toBe(EXPECTED_LENGTH);
    expect(chessBoardTiles[0].length).toBe(EXPECTED_LENGTH);
  });

  test('getChessboardTiles should return a matrix of tile objects', () => {
    expect(typeof chessBoardTiles[0][0].click).toBe('boolean');
    expect(typeof chessBoardTiles[0][0].coordinates.row).toBe('string');
    expect(typeof chessBoardTiles[0][0].coordinates.column).toBe('string');
  });
});