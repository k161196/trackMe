import React, {FC} from 'react';
import withObservables from '@nozbe/with-observables';
import {LineChart} from 'react-native-chart-kit';

import {observeWeights, Weight} from '../data/helpers';
import {chartConfig, chartStyles, windowWidth} from './styles';

const Chart = ({weights}) => {
  if (weights.length < 1) {
    return null;
  }

  const labels = [];
  const data = [];

  weights.forEach(w => {
    labels.push(`${w?.createdAt.getDate()}/${w.createdAt.getMonth() + 1}`);
    // var hours =
    //   w?.createdAt.getHours() < 10
    //     ? '0' + w.createdAt.getHours()
    //     : w.createdAt.getHours();
    // var minutes =
    //   w?.createdAt.getMinutes() < 10
    //     ? '0' + w.createdAt.getMinutes()
    //     : w.createdAt.getMinutes();
    // labels.push(`${hours}:${minutes}`);
    data.push(w.weight);
  });
  return (
    <LineChart
      bezier
      height={250}
      width={windowWidth - 30}
      chartConfig={chartConfig}
      style={chartStyles.chart}
      data={{labels, datasets: [{data}]}}
    />
  );
};

const enhanceWithWeights = withObservables([], () => ({
  weights: observeWeights(),
}));

export default enhanceWithWeights(Chart);
