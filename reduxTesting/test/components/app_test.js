import {renderComponent, expect} from '../test_helper';
import App from '../../src/components/app';

//groups similar tests together , name can be a target
describe('App', () => {
  // it tests single functionality about our targer
  it('shows proper text', () => {

    const component = renderComponent(App);
    // used to make an assertion
    expect(component).to.contain('Testtttiing');
  });

});


