import { VueWrapper, shallowMount } from '@vue/test-utils';
import ChessBoard from '../../src/components/ChessBoard.vue';
import { createTestingPinia } from '@pinia/testing'

describe('ChessTile Component', () => {
  let wrapper: VueWrapper<any>;

  beforeAll(() => {
    wrapper = shallowMount(ChessBoard, {
      global: {
        plugins: [createTestingPinia()]
      }
    });
  });

  test('Exists', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});