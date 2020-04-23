import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components'

const Container = styled.div`
  .canvas-container {
    width: 55vw;
  }
`

const data = {
  labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
  datasets: [
    {
      label: 'Cost of a 1 Bedroom Apartment in Johannesburg (R)',
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
      data: [6391.51, 5325.00, 5407.41, 6200.00, 7156.22, 6281.00, 6600.88]
    }
  ]
};

export default class LineChart extends Component {
  render() {
    return (
      <Container>
        <article className="canvas-container">
          <Line ref="chart" data={data} />
        </article>
      </Container>
    );
  }

  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data
    console.log(datasets[0].data);
  }
}