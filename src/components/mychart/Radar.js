import React, { Component } from "react"
import Personal from "./Personal"

export default class Radar extends Component {
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
        <Personal chartData={this.state.chartDataPersonal} />
        
      </div>
      
    )
  }
}
