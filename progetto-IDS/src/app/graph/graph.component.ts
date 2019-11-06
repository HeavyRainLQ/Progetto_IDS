import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { SqlServiceService } from '../sql-service.service';
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  title = 'Ng7ChartJs By DotNet Techy';
  LineChart = [];
  BarChart = [];
  PieChart = [];
  valoriSoglia = new Array();
  length: number;
  parametriDoc: any;


  constructor(private SqlService: SqlServiceService) {
    this.parametriDoc = this.SqlService.parDocumenti;
    this.parametriDoc = this.parametriDoc[0];
  }

  ngOnInit() {
    this.SqlService.select_soglia().subscribe(data => {
      this.length = this.valoriSoglia.push(0);
      for (let valori of data['records']) {

        this.length = this.valoriSoglia.push(Number(valori.soglia));

      }
      this.drawChart(this.valoriSoglia);
    });

    console.log(this.valoriSoglia['0']);




    // // Bar chart:
    // this.BarChart = new Chart('barChart', {
    //   type: 'bar',
    // data: {
    //  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    //  datasets: [{
    //      label: '# of Votes',
    //      data: [9,7 , 3, 5, 2, 10],
    //      backgroundColor: [
    //          'rgba(255, 99, 132, 0.2)',
    //          'rgba(54, 162, 235, 0.2)',
    //          'rgba(255, 206, 86, 0.2)',
    //          'rgba(75, 192, 192, 0.2)',
    //          'rgba(153, 102, 255, 0.2)',
    //          'rgba(255, 159, 64, 0.2)'
    //      ],
    //      borderColor: [
    //          'rgba(255,99,132,1)',
    //          'rgba(54, 162, 235, 1)',
    //          'rgba(255, 206, 86, 1)',
    //          'rgba(75, 192, 192, 1)',
    //          'rgba(153, 102, 255, 1)',
    //          'rgba(255, 159, 64, 1)'
    //      ],
    //      borderWidth: 1
    //  }]
    // }, 
    // options: {
    //  title:{
    //      text:"Bar Chart",
    //      display:true
    //  },
    //  scales: {
    //      yAxes: [{
    //          ticks: {
    //              beginAtZero:true
    //          }
    //      }]
    //  }
    // }
    // });

    // // pie chart:
    // this.PieChart = new Chart('pieChart', {
    //   type: 'pie',
    // data: {
    //  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    //  datasets: [{
    //      label: '# of Votes',
    //      data: [9,7 , 3, 5, 2, 10],
    //      backgroundColor: [
    //          'rgba(255, 99, 132, 0.2)',
    //          'rgba(54, 162, 235, 0.2)',
    //          'rgba(255, 206, 86, 0.2)',
    //          'rgba(75, 192, 192, 0.2)',
    //          'rgba(153, 102, 255, 0.2)',
    //          'rgba(255, 159, 64, 0.2)'
    //      ],
    //      borderColor: [
    //          'rgba(255,99,132,1)',
    //          'rgba(54, 162, 235, 1)',
    //          'rgba(255, 206, 86, 1)',
    //          'rgba(75, 192, 192, 1)',
    //          'rgba(153, 102, 255, 1)',
    //          'rgba(255, 159, 64, 1)'
    //      ],
    //      borderWidth: 1
    //  }]
    // }, 
    // options: {
    //  title:{
    //      text:"Bar Chart",
    //      display:true
    //  },
    //  scales: {
    //      yAxes: [{
    //          ticks: {
    //              beginAtZero:true
    //          }
    //      }]
    //  }
    // }
    // });


  }

  drawChart(valoreSoglia) {
    this.LineChart = new Chart('lineChart', {
      type: 'line',
      data: {
        labels: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
        datasets: [{
          label: 'Soglie',
          data: valoreSoglia,
          fill: false,
          lineTension: 0.2,
          borderColor: "red",
          borderWidth: 1


        }, {
          label: 'Valori Sal',
          data: [1000, 6000, 7, 900, 6, 4, 200, 15, 4000, 900, 8],
          fill: false,
          lineTension: 0.2,
          borderColor: "blue",
          borderWidth: 1
        }]
      },
      options: {
        title: {
          text: "Grafico Sal",
          display: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
}


