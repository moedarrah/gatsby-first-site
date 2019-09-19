import React, {Component} from 'react';
import {Pie} from 'react-chartjs-2';


class HtmlChart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }
  }

  static defaultProps = {
    displayTitle:false,
    displayLegend: true,
    legendPosition:'right',
  }

  render(){
    return (
        
      
        <Pie
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
     
    )
  }
}

export default HtmlChart;