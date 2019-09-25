import React, { Component } from "react"
import HChart from "./HChart"
import CssChart from "./CssChart"
import JsChart from "./JsChart"
import ReChart from "./ReChart"


export default class Chart extends Component {
  constructor() {
    super()
    this.state = {
      chartData: {},
    }
  }

  componentWillMount() {
    this.getChartData()
  }

  getChartData() {
    this.setState({
      chartDataHtml: {
        labels: ["HTML"],
        datasets: [
          {
            data: [70, 30],
            backgroundColor: ["#D92938"],
          },
        ],
      },
      chartDataCss: {
        labels: ["CSS"],
        datasets: [
          {
            data: [40, 60],
            backgroundColor: ["#D92938"],
          },
        ],
      },
      chartDataJs: {
        labels: ["Javascript"],
        datasets: [
          {
            data: [55, 45],
            backgroundColor: ["#D92938"],
          },
        ],
      },
      chartDataRe: {
        labels: ["React"],
        datasets: [
          {
            data: [20, 80],
            backgroundColor: ["#D92938"],
          },
        ],
      },
     
    })
  }
  render() {
    return (
      // <div className="chart-container">
      <ul className="chart">
        <li><HChart chartData={this.state.chartDataHtml} legendPosition="bottom" /></li> 
        <li><CssChart chartData={this.state.chartDataCss} legendPosition="bottom" /></li> 
        <li><JsChart chartData={this.state.chartDataJs} legendPosition="bottom" /></li> 
        <li><ReChart chartData={this.state.chartDataRe} legendPosition="bottom" /></li> 
      </ul>
      // </div>
    )
  }
}
