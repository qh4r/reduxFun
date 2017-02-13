import {renderComponent, expect} from '../test_helper';
import App from '../../src/components/app';

//groups similar tests together , name can be a target
describe('App', () => {
  let app;

  beforeEach(() => {
      app = renderComponent(App);
  });

  it("renders comment box", () => {
    expect(app.find(".comment-box")).to.exist;
  });

  it("renders comments list", () => {
    expect(app.find(".comments-list")).to.exist;
  })
});


