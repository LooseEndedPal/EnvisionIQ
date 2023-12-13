import { Text, SafeAreaView, StyleSheet, View, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../components/HomeScreen';
import CategoryScreen from '../components/CategoryScreen';
import JournalScreen from '../components/JournalScreen';
import SavedQuotesScreen from '../components/SavedQuotesScreen';
import SettingsScreen from '../components/SettingsScreen'; 
import TaskManager from '../components/TaskManagerScreen';
import LoginScreen from '../AuthScreens/LoginScreen';
import SignUpScreen from '../AuthScreens/SignUpScreen';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Category" component={CategoryScreen} />
        <Stack.Screen name="JournalScreen" component={JournalScreen} />
        <Stack.Screen name="SavedQuotes" component={SavedQuotesScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="TaskManager" component={TaskManager} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default App;
