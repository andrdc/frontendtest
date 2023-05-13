import { setActivePinia, createPinia } from 'pinia';
import { useChessBoardStore } from '../../src/stores/chess-board.store';

describe('Chess Board Store', () => {
  setActivePinia(createPinia());
  const chessBoardStore = useChessBoardStore();

  test('Should have a matrix of tiles', () => {
    expect(typeof chessBoardStore.tiles).toBe('object');
  });

  test('Should have a click tracker', () => {
    expect(typeof chessBoardStore.clickTracker).toBe('object');
  });

  test('Should update clickTracker when clicking a tile', () => {
    const expectedLenght = 1;
    const expectedClickedTile = 'D4';

    chessBoardStore.clickTile({
      coordinates: {
        row: '4',
        column: 'D'
      },
      click: false
    });

    expect(chessBoardStore.clickTracker.length).toBe(expectedLenght);
    expect(chessBoardStore.clickTracker[0]).toBe(expectedClickedTile);
  });
});