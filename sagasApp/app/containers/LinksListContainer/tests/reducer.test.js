import expect from 'expect';
import linksListContainerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('linksListContainerReducer', () => {
  it('returns the initial state', () => {
    expect(linksListContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
