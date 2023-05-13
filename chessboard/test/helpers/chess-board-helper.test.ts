import { getChessBoardTiles, getCoordinate } from '../../src/helpers/chess-board.helper';
import { Tile } from '../../src/models/tile.model';

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

  test('getChessBoardTiles should return the first coordinate as A8', () => {
    const expectedFirstCoordinate: string = 'A8';
    expect(chessBoardTiles[0][0].coordinates.column + chessBoardTiles[0][0].coordinates.row).toBe(expectedFirstCoordinate);
  });

  test('getChessBoarTiles should return the last coordinate as H1', () => {
    const expectedLastCoordinate: string = 'H1';
    expect(chessBoardTiles[EXPECTED_LENGTH - 1][EXPECTED_LENGTH - 1].coordinates.column + chessBoardTiles[EXPECTED_LENGTH - 1][EXPECTED_LENGTH - 1].coordinates.row).toBe(expectedLastCoordinate);
  });

  test('getCoordinate should return a string with the correct coordinate given a tile', () => {
    const expectedCoordinate: string = 'A8';
    expect(getCoordinate(chessBoardTiles[0][0])).toBe(expectedCoordinate);
  });
});