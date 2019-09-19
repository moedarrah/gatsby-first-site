import React, { Component } from "react"
import HtmlChart from "./HtmlChart"
import CssChart from "./CssChart"
import JsChart from "./JsChart"


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
        labels: ["HTML","Need"],
        datasets: [
          {
            data: [70, 30],
            backgroundColor: ["#F25D27", "#F2F2F2"],
          },
        ],
      },
      chartDataCss: {
        labels: ["CSS","Need"],
        datasets: [
          {
            data: [40, 60],
            backgroundColor: ["#2E6FF2", "#F2F2F2"],
          },
        ],
      },
      chartDataJs: {
        labels: ["Javascript","Need"],
        datasets: [
          {
            data: [55, 45],
            backgroundColor: ["#F2D852", "#F2F2F2"],
          },
        ],
      },
      chartDataPersonal: {
        labels: ['Gaming', 'TV', 'Walking', 'Cycling',"Running"],
        datasets: [
          {
            data: [70, 90, 60, 45,10],
            pointBackgroundColor: [],
            backgroundColor: ["#F2D852"],
            
          },
          
        ],
      },
    })
  }
  render() {
    return (
      <div className="chart">
        <HtmlChart chartData={this.state.chartDataHtml} legendPosition="bottom" />
        <CssChart chartData={this.state.chartDataCss} legendPosition="bottom" />
        <JsChart chartData={this.state.chartDataJs} legendPosition="bottom" />
        
      </div>
      
    )
  }
}
