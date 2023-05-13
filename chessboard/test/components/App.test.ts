import { VueWrapper, shallowMount } from '@vue/test-utils';
import App from '../../src/App.vue';
import ChessBoard from '../../src/components/ChessBoard.vue';
import SideBar from '../../src/components/SideBar.vue';

describe('ChessTile Component', () => {
  let wrapper: VueWrapper<any>;

  beforeAll(() => {
    wrapper = shallowMount(App);
  });

  test('Exists', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  test('Has PageWrapper ID', () => {
    expect(wrapper.find('#PageWrapper').exists).toBeTruthy();
  });

  test('Has a ChessBoard Component', () => {
    expect(wrapper.findComponent(ChessBoard).exists).toBeTruthy();
  });

  test('Has a SideBar Component', () => {
    expect(wrapper.findComponent(SideBar).exists).toBeTruthy();
  });

  afterAll(() => {
    wrapper.unmount();
  });
});