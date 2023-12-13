export const fetchQuoteOfTheDay = () => {
  return async (dispatch) => {
    try {
      // Implement API call to fetch   the quote of the day
      const response = await fetch("API_ENDPOINT_FOR_QUOTE_OF_THE_DAY");
      const data = await response.json();

      dispatch({
        type: "FETCH_QUOTE_OF_THE_DAY_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "FETCH_QUOTE_OF_THE_DAY_FAILURE",
        payload: error.message,
      });
    }
  };
};

export const fetchThemedQuotes = (theme) => {
  return async (dispatch) => {
    try {
      // Implement API call to fetch themed quotes
      const response = await fetch(
        `API_ENDPOINT_FOR_THEMED_QUOTES?theme=${theme}`,
      );
      const data = await response.json();

      dispatch({
        type: "FETCH_THEMED_QUOTES_SUCCESS",
        payload: { theme, quotes: data },
      });
    } catch (error) {
      dispatch({
        type: "FETCH_THEMED_QUOTES_FAILURE",
        payload: { theme, error: error.message },
      });
    }
  };
};
