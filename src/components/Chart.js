import React, { Component } from "react"
import Mychart from "./mychart"



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
     
      <ul className="chart">
        <li><Mychart chartData={this.state.chartDataHtml} legendPosition="bottom" /></li> 
        <li><Mychart chartData={this.state.chartDataCss} legendPosition="bottom" /></li> 
        <li><Mychart chartData={this.state.chartDataJs} legendPosition="bottom" /></li> 
        <li><Mychart chartData={this.state.chartDataRe} legendPosition="bottom" /></li> 
      </ul>
      
    )
  }
}
