import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Highcharts from 'highcharts/highstock';
import ReactHighstock from 'react-highcharts/ReactHighstock';

const newData = [
  { x: 1524155305746, y: 5514.82698715, name: "MP3-player" },
  { x: 1524216531968, y: 5390, name: "Alsar" },
  { x: 1524303426736, y: 5490, name: "Alsar" },
  { x: 1524434098676, y: 4889.49979905, name: "MP3-player" },
  { x: 1524479111117, y: 5816.7, name: "RDEShop" },
];

const OPTIONS = {
  chart: {
    zoomType: 'x',
    type: 'area',
    animation: {
      duration: 1000,
    },
  },
  title: {
    text: null,
  },
  legend: {
    enabled: false,
  },
  xAxis: {
    title: {
      text: null,
    },
    type: 'datetime',
  },
  yAxis: {
    title: {
      text: null,
    },
  },
  credits: {
    enabled: false,
  },
  series: [{
    step: 'center',
    name: 'Pris',
    threshold: null,
    fillColor: {
      linearGradient: {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 1,
      },
      stops: [
        [0, Highcharts.getOptions().colors[0]],
        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')],
      ],
    },
    data: newData,
    tooltip: {
      valueDecimals: 0,
    },
  }],
};

const App = () => (
  <div>
    <ReactHighstock
      config={OPTIONS}
      neverReflow={true}
    />
  </div>
);

render(<App />, document.getElementById('root'));
