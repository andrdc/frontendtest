import { VueWrapper, mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing'
import SideBar from '../../src/components/SideBar.vue';

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

  test('Has SideBar ID', () => {
    expect(wrapper.find('#SideBar').exists).toBeTruthy();
  });

  test('Has h2 inside #SideBar with text Coordinates Tracker', () => {
    const expectedText = 'Coordinates Tracker';
    expect(wrapper.find('#SideBar>h2').text()).toBe(expectedText);
  });

  test('Has #ClickTracker and a #ClickTrackerWrapper', () => {
    expect(wrapper.find('#ClickTracker').exists).toBeTruthy();
    expect(wrapper.find('#ClickTrackerWrapper').exists).toBeTruthy();
    expect(wrapper.find('#ClickTrackerWrapper>h2').exists).toBeTruthy();
  });

  afterAll(() => {
    wrapper.unmount();
  });
});