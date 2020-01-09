import themeReducer from '../themeReducer';

const initialState = [];

describe('store/theme/reducer', () => {
  it('should have initial state', () => {
    expect(themeReducer()).toEqual(initialState);
  });
});
