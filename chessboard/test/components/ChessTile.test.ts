import { VueWrapper, mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing'
import { getChessBoardTiles } from '../../src/helpers/chess-board.helper';
import { Tile } from '../../src/models/tile.model';
import ChessTile from '../../src/components/ChessTile.vue';

describe('ChessTile Component', () => {
  let chessBoardTiles: Array<Array<Tile>>;
  let wrapper: VueWrapper<any>;

  beforeAll(() => {
    chessBoardTiles = getChessBoardTiles();
    wrapper = mount(ChessTile, {
      props: { tile: chessBoardTiles[0][0] },
      plugins: [createTestingPinia()]
    });
  });

  test('Exists', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  test('Has a div with chessTile class', () => {
    expect(wrapper.find('.chessTile').exists).toBeTruthy();
  });

  test('As is tile A8 it should has whiteish class', () => {
    expect(wrapper.find('.whiteish').exists).toBeTruthy();
  });

  test('Once tile is clicked should has clicked class', async () => {
    await wrapper.find('.chessTile').trigger('click');
    expect(wrapper.find('.clicked').exists).toBeTruthy();
  });

  afterAll(() => {
    wrapper.unmount();
  });
});