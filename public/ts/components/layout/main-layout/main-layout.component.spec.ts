import { shallow, Wrapper } from '@vue/test-utils';
import ElementUI from 'element-ui';
import * as Vue from 'vue';
import MainLayoutComponent from './index.vue';

(Vue as any).use(ElementUI);

describe('MainLayoutComponent', () => {

  let cmp: Wrapper<MainLayoutComponent>;
  beforeEach(() => {
    cmp = shallow(MainLayoutComponent, {});
  });
  it('renders', () => {
    expect(cmp).toBeDefined();
  });
});
