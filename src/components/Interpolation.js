import React, { useContext, useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import DataContext from '../context/DataContext';

const options = {
  scales: {
    xAxes: [
      {
        type: 'time',
        time: {
          unit: 'day',
        },
      },
    ],
  },
};

const Scatter = () => {
  const { data } = useContext(DataContext);
  const [currentData, setCurrentData] = useState();
  const [labels, setLabels] = useState();

  useEffect(() => {
    setCurrentData(
      data
        .map(({ x, y }) => {
          return { x, y };
        })
        .sort((a, b) => {
          return a.x - b.x;
        }),
    );
    setLabels(data.map(({ x }) => x));
  }, [data]);

  return (
    <Line
      data={{
        labels,
        datasets: [
          {
            label: 'Mb/s',
            data: currentData,
            fill: false,
            backgroundColor: 'rgb(0,0,0)',
            borderColor: 'rgb(100,100,100)',
          },
        ],
      }}
      options={options}
    />
  );
};

export default Scatter;
