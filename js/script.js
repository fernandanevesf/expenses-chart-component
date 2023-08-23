'use strict'

/*
//Custom positioner attempt using the code from the documentation

import { Tooltip } from 'chart.js';

 //Custom positioner
 //@function Tooltip.positioners.myCustomPositioner
 //@param elements {Chart.Element[]} the tooltip elements
 //@param eventPosition {Point} the position of the event in canvas coordinates
 //@returns {TooltipPosition} the tooltip position

Tooltip.positioners.myCustomPositioner = function(elements, eventPosition) {
    // A reference to the tooltip model
    const tooltip = this;

    return {
        x: 0,
        y: 0
        // You may also include xAlign and yAlign to override those tooltip options.
    };
};
*/

const ctx = document.getElementById('chart');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
      datasets: [{
        data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
        borderWidth: 0,
        backgroundColor: ['hsl(10, 79%, 65%)','hsl(10, 79%, 65%)', 'hsl(186, 34%, 60%)','hsl(10, 79%, 65%)',
        'hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)','hsl(10, 79%, 65%)'],
        hoverBackgroundColor: ['hsl(10, 96%, 80%)', 'hsl(10, 96%, 80%)', 'hsl(186, 37%, 73%)', 'hsl(10, 96%, 80%)',
        'hsl(10, 96%, 80%)', 'hsl(10, 96%, 80%)', 'hsl(10, 96%, 80%)'],
        borderRadius: 3,
        borderSkipped: false
      }]
    },
    options: {
      scales: {
        x: {
          grid:{
            display: false
            },
          border: {
            display: false,
            },
      },
        y: {
          beginAtZero: true,
          grid:{
            display: false
            },
          border: {
            display: false,
            },
            ticks: {
              display: false,
            },
      }
    },
      animation: false,
      plugins: {
        legend: {
        display: false,
        labels:{
        font:{
          family: 'DM Sans'
      }
    }
  },
        tooltip: {
          enabled: true,
          backgroundColor: 'hsl(25, 47%, 15%)',
          yAlign: 'top',
          xAlign: 'center',
          displayColors: false,
          caretSize: 0,
          //position: 'myCustomPositioner', 
          callbacks: {
            label: function(context) {
              let label = context.dataset.label || '';

              if (label) {
                  label += ': ';
              }
              if (context.parsed.y !== null) {
                  label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
              }
              return label;
          }, 
      }
    }, 
    },
  }
  }
);

