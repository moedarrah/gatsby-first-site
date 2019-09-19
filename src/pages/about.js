import React, { Component } from 'react';
import Layout from "../components/layout";
import Chart from "../components/chart/Chart";
import Radar from "../components/chart/Radar"


class about extends Component {
 

  render() {
    return (
      <Layout>
        <h1 className="projects">My knowledge</h1>
        <Chart/>
        <h1 className="personal">My personal interest</h1>
        <Radar/>
      </Layout>
    );
  }
}

export default about;