import expect from 'expect';
import navigationReducer from '../reducer';
import { fromJS } from 'immutable';

describe('navigationReducer', () => {
  it('returns the initial state', () => {
    expect(navigationReducer(undefined, {})).toEqual(fromJS({}));
  });
});
