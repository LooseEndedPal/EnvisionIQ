const initialState = {
  user: null,
  preferences: {},
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_PREFERENCES':
      return { ...state, preferences: action.payload };
    case 'UPDATE_PROFILE_LOADING':
      return { ...state, loading: true, error: null };
    case 'UPDATE_PROFILE_SUCCESS':
      return { ...state, user: action.payload, loading: false };
    case 'UPDATE_PROFILE_ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default userReducer;
