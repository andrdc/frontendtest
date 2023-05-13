import { VueWrapper, shallowMount } from '@vue/test-utils';
import App from '../../src/App.vue';

describe('ChessTile Component', () => {
  let wrapper: VueWrapper<any>;

  beforeAll(() => {
    wrapper = shallowMount(App);
  });

  test('Exists', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});