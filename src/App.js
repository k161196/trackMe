import React, {useState} from 'react';
import {ScrollView, StatusBar, Text} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import Chart from './components/chart';
import Header from './components/header';
import Creator from './components/creator';
import WeightsList from './components/weightListing';
import BottomNav from './components/bottomNav';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar />
        <BottomNav />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
