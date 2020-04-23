import React, {Component} from 'react';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components'

const Container = styled.div`
  .canvas-container {
    width: 55vw;
  }
`

const data = {
  labels: ['Home broken in', 'Mugged/Robbed', 'Car Stolen', 'Things stolen from car', 'Attacked', 'Insulted'],
  datasets: [
    {
      label: 'Citizens Worried (per 100) about Crime',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [79.55, 81.03, 77.42, 81.33, 75.77, 63.63]
    }
  ]
};

export default class BarChart extends Component {
  render() {
    return (
      <Container>
        <article className="canvas-container">
          <Bar ref="chart" data={data} />
        </article>
      </Container>
    );
  }

  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data
    console.log(datasets[0].data);
  }
}