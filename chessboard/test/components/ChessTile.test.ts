import { VueWrapper, mount } from '@vue/test-utils';
import { getChessBoardTiles } from '../../src/helpers/chess-board.helper';
import { Tile } from '../../src/models/tile.model';
import ChessTile from '../../src/components/ChessTile.vue';

describe('ChessTile Component', () => {
  let chessBoardTiles: Array<Array<Tile>>;
  let wrapper: VueWrapper<any>;

  beforeAll(() => {
    chessBoardTiles = getChessBoardTiles();
    wrapper = mount(ChessTile, { props: { tile: chessBoardTiles[0][0] } });
  });

  test('Exists', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});