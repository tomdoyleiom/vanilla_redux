import { Reducer } from 'redux-testkit';
import tabReducer from '../tabReducer';

const initialState = 'map';

describe('store/tab/reducer', () => {
  it('should have initial state', () => {
    expect(tabReducer()).toEqual(initialState);
  });

  it('should handle TAB_THEMES on initial state', () => {
    const action = { type: 'TAB_THEMES' };
    const result = 'themes';
    Reducer(tabReducer).withState(initialState).expect(action).toReturnState(result);
  });

  it('should handle TAB_DETAILS on initial state', () => {
    const action = { type: 'TAB_DETAILS' };
    const result = 'details';
    Reducer(tabReducer).withState(initialState).expect(action).toReturnState(result);
  });

  it('should have the same state when handling TAB_MAP when the state is "map"', () => {
    const action = { type: 'TAB_MAP' };
    const result = 'map';
    Reducer(tabReducer).withState(result).expect(action).toReturnState(result);
  });
});
