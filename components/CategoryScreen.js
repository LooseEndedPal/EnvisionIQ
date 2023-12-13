import React, { useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';

const CategoryScreen = ({ navigation }) => {
  const scaleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 600, 
      useNativeDriver: true,
    }).start();
  }, [scaleAnim]);

  const apiKey = 'KgufyAFsNbjKmQM3pD1g58Vl1LQpljTm5y7vlKTs';

  const navigateToQuotesByCategory = async (category) => {
    try {
      const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
        headers: {
          'X-API-KEY': apiKey,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const quotesData = await response.json();
        navigation.navigate('QuotesByCategory', { quotes: quotesData, category });
      } else {
        throw new Error('Failed to fetch quotes');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCategoryPress = (category) => {
    navigateToQuotesByCategory(category);
  };

  const animatedStyles = {
    transform: [{ scale: scaleAnim }],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <Animated.View style={[styles.categoryButtonContainer, animatedStyles]}>
        <TouchableOpacity style={styles.categoryButton} onPress={() => handleCategoryPress('Inspirational')}>
          <Text>Inspirational Quotes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton} onPress={() => handleCategoryPress('Motivational')}>
          <Text>Motivational Quotes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton} onPress={() => handleCategoryPress('Love')}>
          <Text>Love Quotes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton} onPress={() => handleCategoryPress('Funny')}>
          <Text>Funny Quotes</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  categoryButtonContainer: {
    alignItems: 'center',
  },
  categoryButton: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default CategoryScreen;

