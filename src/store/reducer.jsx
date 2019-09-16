const initialState = {
  authenticated: false,
}

const reducer = (state = initialState, action) => {
  if (action.type === 'AUTHENTICATE') {
    return {
      authenticated: true,
    }
  }
  return state;
};

export default reducer;
