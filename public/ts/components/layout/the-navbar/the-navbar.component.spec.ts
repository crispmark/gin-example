import { shallow, Wrapper } from '@vue/test-utils';
import ElementUI from 'element-ui';
import * as Vue from 'vue';
import TheNavbarComponent from './index.vue';

(Vue as any).use(ElementUI);

describe('TheNavbarComponent', () => {

  let cmp: Wrapper<TheNavbarComponent>;
  beforeEach(() => {
    cmp = shallow(TheNavbarComponent, {});
  });
  it('renders', () => {
    expect(cmp).toBeDefined();
  });
});
