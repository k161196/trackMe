import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text} from 'react-native';

import Chart from '../components/chart';
import Header from '../components/header';
import Creator from '../components/creator';
import WeightsList from '../components/weightListing';

const App = () => {
  const [showCreator, setShowCreator] = useState(false);
  return (
    <>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Header onOpenCreator={() => setShowCreator(true)} />
        <Creator
          isCreatorVisible={showCreator}
          onHideCreator={() => setShowCreator(false)}
        />
        <Chart />
        <WeightsList />
      </ScrollView>
    </>
  );
};

export default App;
