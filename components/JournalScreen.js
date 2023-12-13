import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, Button } from 'react-native';

const JournalScreen = ({navigation}) => {
  const [journalEntries, setJournalEntries] = useState([]);

  const [newEntryTitle, setNewEntryTitle] = useState('');
  const [newEntryContent, setNewEntryContent] = useState('');

  const renderJournalEntry = ({ item }) => {
    return (
      <TouchableOpacity style={styles.entryContainer}>
        <Text style={styles.entryTitle}>{item.title}</Text>
        <Text style={styles.entryContent}>{item.content}</Text>
      </TouchableOpacity>
    );
  };

  const addJournalEntry = () => {
    const newEntry = {
      id: Math.random().toString(),
      title: newEntryTitle,
      content: newEntryContent,
    };
    setJournalEntries([...journalEntries, newEntry]);
    setNewEntryTitle('');
    setNewEntryContent('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Journal your thoughts !</Text>

      <View style={styles.formContainer}>
        <TextInput
          placeholder="Enter title"
          style={styles.input}
          value={newEntryTitle}
          onChangeText={setNewEntryTitle}
        />
        <TextInput
          placeholder="Enter content"
          style={[styles.input, { height: 100 }]}
          multiline
          value={newEntryContent}
          onChangeText={setNewEntryContent}
        />
        <Button title="Add Entry" onPress={addJournalEntry} />
      </View>

      <FlatList
        data={journalEntries}
        keyExtractor={(item) => item.id}
        renderItem={renderJournalEntry}
        style={styles.entryList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#87CEFA',
  },
  header: {
    fontSize: 24,
    fontWeight: 'italic',
    fontFamily: 'georgia',
    marginBottom: 15,
    textAlign: 'center',
  },
  formContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: '#800000',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  entryList: {
    flex: 1,
    marginTop: 10,
  },
  entryContainer: {
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#FFC0CB',
    shadowColor: '#800080',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  entryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    fontFamily: 'georgia',
  },
  entryContent: {
    fontSize: 16,
  },
});

export default JournalScreen;

