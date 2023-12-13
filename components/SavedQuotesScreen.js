import React, { useState } from "react";
import { View, Text, FlatList, Button, TouchableOpacity } from "react-native";

const SavedQuotesScreen = () => {
  const [savedQuotes, setSavedQuotes] = useState([]);

  // This Function is for deleting quote
  const deleteQuote = (quoteId) => {
    const updatedQuotes = savedQuotes.filter((quote) => quote.id !== quoteId);
    setSavedQuotes(updatedQuotes);
  };

  const renderQuoteItem = ({ item }) => (
    <View
      style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: "#ccc" }}
    >
      <Text>{item.text}</Text>
      <TouchableOpacity onPress={() => deleteQuote(item.id)}>
        <Text style={{ color: "red" }}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Saved Quotes</Text>
      {savedQuotes.length === 0 ? (
        <Text>No saved quotes yet.</Text>
      ) : (
        <FlatList
          data={savedQuotes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderQuoteItem}
        />
      )}
    </View>
  );
};

export default SavedQuotesScreen;
