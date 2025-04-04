
import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/sharedmodule';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ApexChartComponent } from '../../../../@spk/apex-chart/apex-chart.component';

@Component({
  selector: 'app-slope-charts',
  standalone: true,
  imports: [SharedModule,ApexChartComponent],
  templateUrl: './slope-charts.component.html',
  styleUrl: './slope-charts.component.scss'
})
export class SlopeChartsComponent {
chartOptions:any={
  series: [
    {
      name: 'Primary',
      data: [
        {
          x: 'Category 1',
          y: 503,
        },
        {
          x: 'Category 2',
          y: 580,
        },
        {
          x: 'Category 3',
          y: 135,
        },
      ],
    },
    {
      name: 'success',
      data: [
        {
          x: 'Category 1',
          y: 733,
        },
        {
          x: 'Category 2',
          y: 385,
        },
        {
          x: 'Category 3',
          y: 715,
        },
      ],
    },
    {
      name: 'Warning',
      data: [
        {
          x: 'Category 1',
          y: 255,
        },
        {
          x: 'Category 2',
          y: 211,
        },
        {
          x: 'Category 3',
          y: 441,
        },
      ],
    },
    {
      name: 'Secondary',
      data: [
        {
          x: 'Category 1',
          y: 428,
        },
        {
          x: 'Category 2',
          y: 749,
        },
        {
          x: 'Category 3',
          y: 559,
        },
      ],
    },
  ],
    chart: {
    height: 350,
    type: 'line',
  },
  plotOptions: {
    line: {
      isSlopeChart: true,
    },
  },
  tooltip: {
    followCursor: true,
    intersect: false,
    shared: true,
  },
  dataLabels: {
    background: {
      enabled: true,
    },
    formatter(val: null, opts: { w: { config: { series: { [x: string]: { name: any; }; }; }; }; seriesIndex: string | number; }) {
      const seriesName = opts.w.config.series[opts.seriesIndex].name
      return val !== null ? seriesName : ''
    },
  },
  yaxis: {
    show: true,
    labels: {
      show: true,
    },
  },
  xaxis: {
    position: 'bottom',
  },
  legend: {
    show: true,
    position: 'bottom',
    horizontalAlign: 'center',
  },
  stroke: {
    width: [2, 3, 4, 2],
    dashArray: [0, 0, 5, 2],
    curve: 'smooth',
  },
  colors: ["#5c67f7","#E354D4", "#FFC658", "#9e5cf7" ]
}
chartOptions1:any={
  series: [
    {
      name: 'Primary',
      data: [
        {
          x: 'Jan',
          y: 43,
        },
        {
          x: 'Feb',
          y: 58,
        },
      ],
    },
    {
      name: 'success',
      data: [
        {
          x: 'Jan',
          y: 33,
        },
        {
          x: 'Feb',
          y: 38,
        },
      ],
    },
    {
      name: 'Warning',
      data: [
        {
          x: 'Jan',
          y: 55,
        },
        {
          x: 'Feb',
          y: 21,
        },
      ],
    },
  ],
    chart: {
    height: 350,
    type: 'line',
  },
  plotOptions: {
    line: {
      isSlopeChart: true,
    },
  },
  colors: ["#5c67f7","#E354D4", "#FFC658", "#9e5cf7" ]
}
}
