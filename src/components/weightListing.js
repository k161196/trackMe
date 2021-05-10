import React, {FC} from 'react';
import withObservables from '@nozbe/with-observables';
import {LineChart} from 'react-native-chart-kit';

import {observeWeights, Weight} from '../data/helpers';
import {chartConfig, chartStyles, windowWidth} from './styles';
import {View, Text, StyleSheet} from 'react-native';

const WeightsList = ({weights}) => {
  if (weights.length < 1) {
    return null;
  }
  const data = [];

  weights.forEach(w => {
    // labels.push(`${w?.createdAt.getDate()}/${w.createdAt.getMonth() + 1}`);
    var date = `${w?.createdAt.getDate()}/${w.createdAt.getMonth() + 1}`;
    var hours =
      w?.createdAt.getHours() < 10
        ? '0' + w.createdAt.getHours()
        : w.createdAt.getHours();
    var minutes =
      w?.createdAt.getMinutes() < 10
        ? '0' + w.createdAt.getMinutes()
        : w.createdAt.getMinutes();

    const obj = {
      label: `${hours}:${minutes} ( ${date} )`,
      weight: w.weight,
    };
    // labels.push(`${hours}:${minutes}`);
    data.push(obj);
  });
  return (
    <View style={listStyles.listContainer}>
      <Text style={listStyles.listHeading}>Weight's </Text>
      {data.map(item => {
        return (
          <View style={listStyles.listItem}>
            <Text style={listStyles.heading}>{item.weight}</Text>
            <Text style={listStyles.lightText}>{item.label}</Text>
          </View>
        );
      })}
    </View>
  );
};

const enhanceWithWeights = withObservables([], () => ({
  weights: observeWeights(),
}));

const boxWithShadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.27,
  shadowRadius: 4.65,

  elevation: 6,
};

const listStyles = StyleSheet.create({
  listContainer: {
    // backgroundColor: 'red',
    padding: 15,
  },
  listItem: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 5,
    borderRadius: 5,
    ...boxWithShadow,
  },
  heading: {
    fontSize: 20,
  },
  listHeading: {
    fontSize: 20,
    marginBottom: 10,
  },
  lightText: {
    opacity: 0.5,
    marginTop: 5,
    // fontSize: 15,
  },
});

export default enhanceWithWeights(WeightsList);
