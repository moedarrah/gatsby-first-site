import React, {Component} from 'react';
import {Pie} from 'react-chartjs-2';


class Rechart extends Component{
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
        
      <div className="pie">

      
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
     </div>
    )
  }
}

export default Rechart;