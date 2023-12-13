import React, { useState, useEffect } from 'react';
import { View, Text, Button, TouchableOpacity, Modal } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [quote, setQuote] = useState('');
  const [category, setCategory] = useState('inspirational');
  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
  const apikey = 'Nc1JqwaxxhshJ/808pw3LA==mZ17URUr5TiD6RjX';

  const fetchQuote = async () => {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'X-Api-Key': apikey,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch');
      }

      const json = await response.json();
      if (json && json.length > 0 && json[0].quote) {
        setQuote(json[0].quote);
      } else {
        setQuote('No quote available');
      }
    } catch (error) {
      console.error('Error fetching quote:', error);
      setQuote('Unable to fetch quote at the moment');
    }
  };

  const addToFavorites = () => {
    setSuccessMessage('Quote has been saved to favourites!');
    setShowModal(true);
  };

  useEffect(() => {
    const getNewQuote = async () => {
      await fetchQuote();
    };

    getNewQuote();
  }, [url, apikey, category]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View>
        <Button title="Home" color="#A0522D" onPress={() => {navigation.navigate('Home')}} />
        <Button title="Categories" color="#A0522D" onPress={() => {navigation.navigate('Category')}} />
        <Button title="Journal" color="#A0522D" onPress={() => {navigation.navigate('JournalScreen')}} />
        <Button title="Saved quotes" color="#A0522D" onPress={() => {navigation.navigate('SavedQuotes')}} />
        <Button title="TaskManager" color="#A0522D" onPress={() => {navigation.navigate('TaskManager')}} />
        <Button title="Settings" color="#A0522D" onPress={() => {navigation.navigate('Settings')}} />
        <Button title="Login" color="#A0522D" onPress={() => {navigation.navigate('Login')}} />
        <Button title="Register" color="#A0522D" onPress={() => {navigation.navigate('SignUp')}} />
      </View>
      <Text style={{ textAlign: 'center', fontSize: 20 }}>
        Welcome to EnvisionIQ!
      </Text>
      <Text style={{ textAlign: 'center', fontSize: 15, marginTop: 20 }}>
        Your Quote of the Day:
      </Text>
      <Text style={{ textAlign: 'center', margin: 20 }}>{quote}</Text>
      <Button
        title="Get New Quote"
        onPress={async () => {
          await fetchQuote();
        }}
        color="#26A65B"
      />
      <TouchableOpacity onPress={addToFavorites}>
        <View style={{ backgroundColor: '#26A65B', padding: 10, marginVertical: 10, borderRadius: 5 }}>
          <Text style={{ color: '#ffffff', textAlign: 'center' }}>Add to Favourites</Text>
        </View>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, alignItems: 'center' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>{successMessage}</Text>
            <Button title="OK" onPress={() => setShowModal(false)} color="#26A65B" />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default HomeScreen;