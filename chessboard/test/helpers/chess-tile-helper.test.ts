import { getBackground } from '../../src/helpers/chess-tile.helper';

describe('Chess Board Tests', () => {
  test('A8 tile should has whiteish background', () => {
    const background: [boolean, boolean] = getBackground(8, 'A'.charCodeAt(0));
    expect(background).toStrictEqual([false, true]);
  });

  test('G4 tile should has green background', () => {
    const background: [boolean, boolean] = getBackground(3, 'G'.charCodeAt(0));
    expect(background).toStrictEqual([true, false]);
  });
});