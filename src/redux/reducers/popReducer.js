const popReducer = (
  state = { pop: null, searching: false, error: false },
  action
) => {
  switch (action.type) {
    case 'POP_LIST_SET':
      return { pop: action.payload, error: false, searching: false };

    case 'POP_LIST_ERROR':
      console.log(action.err);
      return { ...state, error: true, searching: false };

    case 'POP_LIST_REQUEST':
      return { ...state, error: false, searching: true };

    default:
      return state;
  }
};

export default popReducer;
