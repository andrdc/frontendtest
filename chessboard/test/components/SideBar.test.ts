import { VueWrapper, mount } from '@vue/test-utils';
import SideBar from '../../src/components/SideBar.vue';
import { createTestingPinia } from '@pinia/testing'

describe('ChessTile Component', () => {
  let wrapper: VueWrapper<any>;

  beforeAll(() => {
    wrapper = mount(SideBar, {
      global: {
        plugins: [createTestingPinia()]
      }
    });
  });

  test('Exists', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});