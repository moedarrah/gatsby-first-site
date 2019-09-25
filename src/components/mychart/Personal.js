import React, { Component } from 'react'
import {Radar} from 'react-chartjs-2';

class Personal extends Component{
    constructor(props){
      super(props);
      this.state = {
        chartData:props.chartData
      }
    }
  
    static defaultProps = {
      displayTitle:false,
      displayLegend: false,
      
    }
  
    render(){
      return (
          
        <div className="radar">
          <Radar
            data={this.state.chartData}
            options={{
              title:{
                display:false
              },
              legend:{
                display:false
              }
            }}
          />
       </div>
      )
    }
  }
  
  export default Personal;
