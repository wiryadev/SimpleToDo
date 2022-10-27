/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ToDoProvider } from './contexts/ToDoContext';
import Navigation from './navigation';

const App = () => {

  return (
    <ToDoProvider>
    <NavigationContainer>
        <Navigation />
    </NavigationContainer>
      </ToDoProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
