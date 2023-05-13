import { VueWrapper, shallowMount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import ChessBoard from '../../src/components/ChessBoard.vue';
import ChessTile from '../../src/components/ChessTile.vue';

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

  test('Has ChessBoardWrapper ID', () => {
    expect(wrapper.find('#ChessBoardWrapper').exists).toBeTruthy();
  });

  test('Has 8 span elements with class rowWrapper', () => {
    const expectedLength = 8;
    expect(wrapper.findAll('.rowWrapper').length).toBe(expectedLength);
  });

  test('Has 64 ChessTile components', () => {
    const expectedLength = 64;
    expect(wrapper.findAllComponents(ChessTile).length).toBe(expectedLength);
  });

  afterAll(() => {
    wrapper.unmount();
  });
});