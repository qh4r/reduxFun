import {renderComponent, expect} from '../test_helper';
import App from '../../src/components/app';

//groups similar tests together , name can be a target
describe('App', () => {

  it("renders comment box", () => {
    const app = renderComponent(App);
    expect(app.find(".comment-box")).to.exist;
  })

});


