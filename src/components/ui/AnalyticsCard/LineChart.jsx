import React, { Component } from "react";
import Chart from "react-apexcharts";

class LineChart extends Component {
    constructor(props) {
        super(props);

        let { title, data, mainColor } = this.props;

        this.state = {
            series: [{
                name: title,
                data: data
            }],
            options: {
                chart: {
                    type: 'line',
                    fontFamily: "Gelion",
                    toolbar: {
                        show: false
                    },
                    zoom: {
                        enabled: false
                    }
                },
                markers: {
                    size: [5, 7],
                    colors: "#fff",
                    strokeColors: mainColor,
                    strokeWidth: 2,
                    strokeOpacity: 0.6,
                    strokeDashArray: 0,
                    fillOpacity: 1,
                    discrete: [],
                    shape: "circle",
                    radius: 2,
                    offsetX: 0,
                    offsetY: 0,
                    onClick: undefined,
                    onDblClick: undefined,
                    showNullDataPoints: true,
                    hover: {
                        size: undefined,
                        sizeOffset: 3
                    }
                },
                // annotations: {
                //     points: [{
                //       x: "Feb",
                //       y: 30,
                //       marker: {
                //         size: 6,
                //         fillColor: '#fff',
                //         strokeColor: 'red',
                //         radius: 2,
                //         cssClass: 'apexcharts-custom-class'
                //       },
                //       label: {
                //         borderColor: '#FF4560', 
                //         offsetY: 0,
                //         style: {
                //           color: '#fff',
                //           background: '#FF4560',
                //         }
                //       }
                //     }]
                //   },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight',
                    show: true,
                    lineCap: 'butt',
                    width: 2,
                    colors: [mainColor],
                    dashArray: 0,
                },
                grid: {
                    row: {
                        colors: ['transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
                },

            },


        };
    }
    render() {
        return (
            <div className="chart-container">
                <div className="row">
                    <div className="mixed-chart">
                        <Chart
                            width="100%" 
                            height="260px"
                            options={this.state.options}
                            series={this.state.series}
                            type="line"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default LineChart;