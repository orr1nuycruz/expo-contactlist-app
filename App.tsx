import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ContactIntro from './screens/contactintro';
import AddContactPage from './screens/addContact';
import { Provider } from 'react-redux'
import { configureAppStore } from './redux/storage';
import DisplayContactPage from './screens/displayContact';
import EditContactPage from './screens/editContact';


const Stack = createStackNavigator();
const store = configureAppStore()

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen name="CONTACTINTRO" component={ContactIntro} />
          <Stack.Screen name="ADDCONTACT" component={AddContactPage} />
          <Stack.Screen name="DISPLAYCONTACT" component={DisplayContactPage} />
          <Stack.Screen name="EDITCONTACT" component={EditContactPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;