export const saveFavoriteQuote = (quote) => ({
  type: "SAVE_FAVORITE_QUOTE",
  payload: quote,
});

export const clearSavedQuotes = () => ({
  type: "CLEAR_SAVED_QUOTES",
});

export const markAsFavorite = (quoteId) => ({
  type: "MARK_AS_FAVORITE",
  payload: quoteId,
});
