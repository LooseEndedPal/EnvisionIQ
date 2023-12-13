const initialState = {
  quoteOfTheDay: '',
  themedQuotes: [],
  loading: false,
  error: null,
};

const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_QUOTE_LOADING':
      return { ...state, loading: true, error: null };
    case 'FETCH_QUOTE_SUCCESS':
      return { ...state, quoteOfTheDay: action.payload, loading: false };
    case 'FETCH_QUOTE_ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default quoteReducer;
