const initialState = {
  favoriteQuotes: [],
  loading: false,
  error: null,
};

const favoriteQuotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_FAVORITE_QUOTE':
      return { ...state, favoriteQuotes: [...state.favoriteQuotes, action.payload] };
    case 'REMOVE_FAVORITE_QUOTE':
      return {
        ...state,
        favoriteQuotes: state.favoriteQuotes.filter(quote => quote.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default favoriteQuotesReducer;
